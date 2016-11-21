System.register(["@angular/core", "../../../service/user.service"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, user_service_1, ProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            ProfileComponent = (function () {
                function ProfileComponent(userService) {
                    var _this = this;
                    this.userService = userService;
                    var func = function (user) { return _this.user = user; };
                    this.userService.getUser(func);
                }
                ProfileComponent.prototype.triggerPhoneModal = function () {
                    $('#phone_modal').modal('show');
                };
                ProfileComponent.prototype.submitPhone = function ($event, phoneInput) {
                    var _this = this;
                    $event.preventDefault();
                    var phoneNumber = phoneInput.value;
                    if (phoneNumber && phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber)) {
                        phoneInput.value = '';
                        this.user.phoneNumber = phoneNumber;
                        var func = function (user) { return _this.user = user; };
                        this.userService.updateUser(this.user, func);
                    }
                };
                return ProfileComponent;
            }());
            ProfileComponent = __decorate([
                core_1.Component({
                    selector: "profile",
                    templateUrl: "client/modules/home/profile/profile.component.html",
                    styles: [
                        '.segment {font-size : 18px;}'
                    ]
                }),
                __metadata("design:paramtypes", [user_service_1.UserService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    };
});
//# sourceMappingURL=profile.component.js.map