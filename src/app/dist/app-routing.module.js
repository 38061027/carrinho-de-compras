"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var food_details_component_1 = require("./components/food-details/food-details.component");
var admin_component_1 = require("./components/admin/admin.component");
var can_active_guard_1 = require("./core/guards/can-active.guard");
var can_active_admin_guard_1 = require("./core/guards/can-active-admin.guard");
var routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [can_active_guard_1.canActiveGuard] },
    { path: 'details/:id', component: food_details_component_1.FoodDetailsComponent, canActivate: [can_active_guard_1.canActiveGuard] },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [can_active_admin_guard_1.canActiveAdminGuard] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
