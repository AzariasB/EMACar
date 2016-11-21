System.register(["@angular/core", "@angular/router", "./user.service"], function (exports_1, context_1) {
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
    var core_1, router_1, user_service_1, CanActivateViaAuthGuard;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            CanActivateViaAuthGuard = (function () {
                function CanActivateViaAuthGuard(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
                    var url = state.url;
                    return this.checkLogin(url);
                };
                CanActivateViaAuthGuard.prototype.checkLogin = function (url) {
                    if (this.userService.isLoggedIn())
                        return true;
                    console.log('not connected');
                    this.router.navigate(['/login']);
                    return false;
                };
                return CanActivateViaAuthGuard;
            }());
            CanActivateViaAuthGuard = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [user_service_1.UserService,
                    router_1.Router])
            ], CanActivateViaAuthGuard);
            exports_1("CanActivateViaAuthGuard", CanActivateViaAuthGuard);
        }
    };
});
//# sourceMappingURL=guard.service.js.map