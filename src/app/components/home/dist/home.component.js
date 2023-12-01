"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var cart_actions_1 = require("src/app/store/cart.actions");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, service, store) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.store = store;
        this.btn = true;
        this.cartItems$ = store.select('cart');
        this.cartItems$.subscribe(function (res) {
            _this.pedidos = res;
        });
        this.qtd = this.store.select('cart').pipe(rxjs_1.map(function (cartState) { return cartState.quantity; }));
        this.qtd.subscribe(function (value) {
            if (value == 0) {
                _this.btn = true;
            }
            else {
                _this.btn = false;
            }
        });
    }
    HomeComponent.prototype.getFood = function () {
        var _this = this;
        this.service.getFood().subscribe(function (res) { return (_this.foods = res); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getFood();
    };
    HomeComponent.prototype.onSelect = function (item) {
        this.route.navigate(['/details', item.id]);
    };
    HomeComponent.prototype.addFood = function (food) {
        this.store.dispatch(cart_actions_1.addFood({ cart: food }));
    };
    HomeComponent.prototype.sendFood = function () {
        this.service.sendFood(this.pedidos).subscribe();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
