"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const typeorm_1 = require("typeorm");
let User = class User {
    constructor(username, hashPwd) {
        if (!username)
            return;
        if (username.indexOf('@') > -1) {
            username = username.split('@')[0];
        }
        this.username = username;
        [this.prenom, this.nom] = username.split('.').map(a => {
            if (a) {
                return a[0].toUpperCase() + a.slice(1).toLowerCase();
            }
            return '';
        });
        this.mail = this.username + '@mines-ales.org';
        this.password = hashPwd;
    }
};
__decorate([
    typeorm_1.PrimaryColumn({
        length: '255'
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("string", {
        length: '255'
    }),
    __metadata("design:type", String)
], User.prototype, "nom", void 0);
__decorate([
    typeorm_1.Column("string", {
        length: '255'
    }),
    __metadata("design:type", String)
], User.prototype, "prenom", void 0);
__decorate([
    typeorm_1.Column("string", {
        length: '255'
    }),
    __metadata("design:type", String)
], User.prototype, "mail", void 0);
__decorate([
    typeorm_1.Column("string", {
        length: '255'
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("string", {
        length: '10',
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
User = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [String, String])
], User);
exports.User = User;
//# sourceMappingURL=User.js.map