System.register(["@angular/router", "./home.component", "../covoiturage/covoit.component", "../covoiturage/create/create.component", "./about/about.component", "./profile/profile.component", "../../service/guard.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, covoit_component_1, create_component_1, about_component_1, profile_component_1, guard_service_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (covoit_component_1_1) {
                covoit_component_1 = covoit_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (guard_service_1_1) {
                guard_service_1 = guard_service_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                {
                    path: 'home',
                    canActivate: [guard_service_1.CanActivateViaAuthGuard],
                    component: home_component_1.HomeComponent,
                    children: [
                        { path: '', component: covoit_component_1.CovoiturageListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: 'about', component: about_component_1.AboutComponent },
                        { path: 'profile', component: profile_component_1.ProfileComponent }
                    ]
                }
            ]);
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=home.routing.js.map