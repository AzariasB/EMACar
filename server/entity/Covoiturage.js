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
const User_1 = require("./User");
let Covoiturage = class Covoiturage {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Covoiturage.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: '128'
    }),
    __metadata("design:type", String)
], Covoiturage.prototype, "from", void 0);
__decorate([
    typeorm_1.Column({
        length: '128'
    }),
    __metadata("design:type", String)
], Covoiturage.prototype, "to", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true
    }),
    __metadata("design:type", String)
], Covoiturage.prototype, "steps", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", Date)
], Covoiturage.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true
    }),
    __metadata("design:type", String)
], Covoiturage.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.username),
    __metadata("design:type", User_1.User)
], Covoiturage.prototype, "proposer", void 0);
Covoiturage = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [])
], Covoiturage);
exports.Covoiturage = Covoiturage;
//# sourceMappingURL=Covoiturage.js.map