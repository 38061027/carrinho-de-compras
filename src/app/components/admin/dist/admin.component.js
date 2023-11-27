"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(service) {
        var _this = this;
        this.service = service;
        this.counter = {};
        this.service.getOrders().subscribe(function (res) {
            _this.orders = res;
            _this.arr = res[0].name;
            _this.counter = {};
            for (var i = 0; i < _this.arr.length; i++) {
                if (_this.counter[_this.arr[i]]) {
                    _this.counter[_this.arr[i]] += 1;
                }
                else {
                    _this.counter[_this.arr[i]] = 1;
                }
            }
        });
    }
    AdminComponent.prototype.deleteOrder = function (orderId) {
        var _this = this;
        this.service.deleteOrder(orderId).subscribe(function () {
            _this.service.getOrders().subscribe(function (res) {
                _this.orders = res;
            });
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
