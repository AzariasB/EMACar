System.register(["@angular/core", "@angular/http", "../../../config", "../../../service/user.service"], function (exports_1, context_1) {
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
    var core_1, http_1, config_1, user_service_1, CreateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            CreateComponent = (function () {
                function CreateComponent(http, userService) {
                    this.http = http;
                    this.userService = userService;
                    this.submitted = false;
                    this.covoit = {
                        description: '',
                        date: null,
                        from: '',
                        to: '',
                        steps: []
                    };
                }
                CreateComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    $('.ui.dropdown').dropdown(config_1.dropdownConf);
                    var change = function (date, text) {
                        _this.dummyDate = text;
                    };
                    $('#day').calendar(config_1.calendarConf(change));
                };
                CreateComponent.prototype.checkValues = function () {
                    return this.covoit.from && this.covoit.to && this.covoit.date;
                };
                CreateComponent.prototype.submit = function ($ev) {
                    var _this = this;
                    $ev.preventDefault();
                    this.covoit.date = $('#day').calendar('get date');
                    //remove doublon
                    this.covoit.steps = this.covoit.steps.filter(function (a) { return a != _this.covoit.from && a != _this.covoit.to; });
                    if (!this.checkValues())
                        return;
                    this.http.post('/covoiturage/create', JSON.stringify(this.covoit), new http_1.RequestOptions({
                        headers: new http_1.Headers({
                            "Content-type": "application/json",
                            "authorization": localStorage.getItem('id_token')
                        })
                    })).map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.submitted = true;
                        _this.covoit = res.covoit;
                    }, function (error) {
                        error.status === 403 && _this.userService.logout();
                    });
                };
                CreateComponent.prototype.validDate = function () {
                    var d = $('#day').calendar('get date');
                    console.log(d);
                    return false;
                };
                return CreateComponent;
            }());
            CreateComponent = __decorate([
                core_1.Component({
                    selector: "covoit-create",
                    templateUrl: "client/modules/covoiturage/create/create.component.html"
                }),
                __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
            ], CreateComponent);
            exports_1("CreateComponent", CreateComponent);
        }
    };
});
//# sourceMappingURL=create.component.js.map