System.register(["@angular/core", "@angular/http", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, http_1, router_1, UserService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            UserService = (function () {
                function UserService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.loggedIn = false;
                    this.loggedIn = !!localStorage.getItem('id_token');
                }
                UserService.prototype.getHeaders = function () {
                    return {
                        headers: new http_1.Headers({
                            "Content-type": "application/json",
                            "authorization": localStorage.getItem('id_token')
                        })
                    };
                };
                UserService.prototype.getUser = function (callback) {
                    if (callback === void 0) { callback = function () { }; }
                    this.http.post('/covoiturage/user', {}, new http_1.RequestOptions(this.getHeaders()))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        if (res.user)
                            callback(res.user);
                    }, function (error) {
                        console.log("could not get user", error);
                    });
                };
                UserService.prototype.updateUser = function (user, callback) {
                    if (callback === void 0) { callback = function () { }; }
                    this.http.post('/covoiturage/updateuser', JSON.stringify({ updated: user }), new http_1.RequestOptions(this.getHeaders()))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        callback(res.user);
                    }, function (error) {
                        console.log("Could not update user", error);
                    });
                };
                UserService.prototype.login = function (email, password, callback) {
                    var _this = this;
                    this.http.post("/login", JSON.stringify({ password: password, username: email }), new http_1.RequestOptions({
                        headers: new http_1.Headers({ "Content-Type": "application/json" })
                    }))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        if (res.message) {
                            callback(false, res);
                            _this.loggedIn = false;
                        }
                        else {
                            localStorage.setItem("id_token", res.jwt);
                            _this.loggedIn = true;
                            callback(true);
                        }
                    }, function (error) { console.log(error); });
                };
                UserService.prototype.logout = function (redirection) {
                    if (redirection === void 0) { redirection = true; }
                    localStorage.removeItem('id_token');
                    this.loggedIn = false;
                    if (redirection) {
                        this.router.navigate(['/login']);
                    }
                };
                UserService.prototype.isLoggedIn = function () {
                    return this.loggedIn;
                };
                return UserService;
            }());
            UserService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, router_1.Router])
            ], UserService);
            exports_1("UserService", UserService);
        }
    };
});
//# sourceMappingURL=user.service.js.map