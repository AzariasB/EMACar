System.register(["@angular/router", "./create/create.component", "../../service/guard.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, create_component_1, guard_service_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (guard_service_1_1) {
                guard_service_1 = guard_service_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                {
                    path: 'create',
                    component: create_component_1.CreateComponent,
                    canActivate: [guard_service_1.CanActivateViaAuthGuard]
                },
            ]);
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=covoit.routing.js.map