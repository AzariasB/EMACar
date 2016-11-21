System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "ng-semantic", "./covoit.component", "./covoit.routing", "../shared/shared.module", "./create/create.component", "./covoiturage/covoiturage.component", "../../service/guard.service"], function (exports_1, context_1) {
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
    var core_1, common_1, forms_1, http_1, ng_semantic_1, covoit_component_1, covoit_routing_1, shared_module_1, create_component_1, covoiturage_component_1, guard_service_1, CovoitModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (covoit_component_1_1) {
                covoit_component_1 = covoit_component_1_1;
            },
            function (covoit_routing_1_1) {
                covoit_routing_1 = covoit_routing_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (covoiturage_component_1_1) {
                covoiturage_component_1 = covoiturage_component_1_1;
            },
            function (guard_service_1_1) {
                guard_service_1 = guard_service_1_1;
            }
        ],
        execute: function () {
            CovoitModule = (function () {
                function CovoitModule() {
                }
                return CovoitModule;
            }());
            CovoitModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        http_1.HttpModule,
                        ng_semantic_1.NgSemanticModule,
                        forms_1.FormsModule,
                        covoit_routing_1.routing,
                        shared_module_1.SharedModule.forRoot()
                    ],
                    schemas: [
                        core_1.CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [covoit_component_1.CovoiturageListComponent, covoiturage_component_1.CovoiturageComponent],
                    declarations: [covoit_component_1.CovoiturageListComponent, create_component_1.CreateComponent, covoiturage_component_1.CovoiturageComponent],
                    bootstrap: [covoit_component_1.CovoiturageListComponent],
                    providers: [guard_service_1.CanActivateViaAuthGuard]
                }),
                __metadata("design:paramtypes", [])
            ], CovoitModule);
            exports_1("CovoitModule", CovoitModule);
        }
    };
});
//# sourceMappingURL=covoit.module.js.map