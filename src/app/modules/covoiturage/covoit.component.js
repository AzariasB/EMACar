System.register(["@angular/core", "@angular/router", "@angular/http", "../../service/user.service"], function (exports_1, context_1) {
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
    var core_1, router_1, http_1, user_service_1, CovoiturageListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            CovoiturageListComponent = (function () {
                function CovoiturageListComponent(router, http, userService) {
                    this.router = router;
                    this.http = http;
                    this.userService = userService;
                    this.covoiturages = [];
                    this.getCovoiturages();
                }
                CovoiturageListComponent.prototype.getCovoiturages = function () {
                    var _this = this;
                    this.http.post("/covoiturage/list", {}, new http_1.RequestOptions({
                        headers: new http_1.Headers({
                            "Content-Type": "application/json",
                            "authorization": localStorage.getItem("id_token")
                        })
                    }))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.covoiturages = res.covs;
                    }, function (error) {
                        if (error.status === 403)
                            _this.userService.logout();
                    });
                };
                return CovoiturageListComponent;
            }());
            CovoiturageListComponent = __decorate([
                core_1.Component({
                    selector: "covoit-list",
                    templateUrl: "client/modules/covoiturage/covoit.component.html"
                }),
                core_1.Injectable(),
                __metadata("design:paramtypes", [router_1.Router,
                    http_1.Http, user_service_1.UserService])
            ], CovoiturageListComponent);
            exports_1("CovoiturageListComponent", CovoiturageListComponent);
        }
    };
});
//# sourceMappingURL=covoit.component.js.map