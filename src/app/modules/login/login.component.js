System.register(["@angular/core", "@angular/router", "../../service/user.service"], function (exports_1, context_1) {
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
    var core_1, router_1, user_service_1, LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(userService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.router = router;
                    this.user = {
                        username: 'hello',
                        password: 'you'
                    };
                    this.loading = false;
                    this.loggedIn = function (resp, message) {
                        _this.loading = false;
                        if (resp) {
                            _this.router.navigate(['/home']);
                        }
                        else {
                            _this.message = (message.source === "timeout-auth") ? "Impossible de se connecter au serveur des Mines" :
                                "Mot de passe ou nom d'utilisateur incorrect";
                        }
                    };
                    if (this.userService.isLoggedIn()) {
                        this.router.navigate(['/home']);
                    }
                }
                LoginComponent.prototype.submitLogin = function () {
                    this.message = null;
                    this.loading = true;
                    this.login();
                };
                LoginComponent.prototype.login = function () {
                    this.userService.login(this.user.username, this.user.password, this.loggedIn);
                };
                return LoginComponent;
            }());
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: 'client/modules/login/login.component.html'
                }),
                __metadata("design:paramtypes", [user_service_1.UserService,
                    router_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map