"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyOrderComponent = void 0;
var core_1 = require("@angular/core");
var MyOrderComponent = /** @class */ (function () {
    function MyOrderComponent(auth, service, store) {
        var _this = this;
        this.auth = auth;
        this.service = service;
        this.store = store;
        this.counter = {};
        this.cartItems$ = store.select('cart');
        this.cartItems$.subscribe(function (res) {
            _this.food = res;
            _this.arr = res.name;
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
    MyOrderComponent.prototype.getObjectKeys = function (obj) {
        return Object.keys(obj);
    };
    MyOrderComponent = __decorate([
        core_1.Component({
            selector: 'app-my-order',
            templateUrl: './my-order.component.html',
            styleUrls: ['./my-order.component.scss']
        })
    ], MyOrderComponent);
    return MyOrderComponent;
}());
exports.MyOrderComponent = MyOrderComponent;
