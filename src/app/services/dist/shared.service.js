"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedService = void 0;
var core_1 = require("@angular/core");
var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.baseUrl = 'https://api-carrinho-38061027.vercel.app';
    }
    SharedService.prototype.getFood = function () {
        return this.http.get(this.baseUrl + "/foods");
    };
    SharedService.prototype.sendFood = function (pedidos) {
        return this.http.post(this.baseUrl + "/pedidos", pedidos);
    };
    SharedService.prototype.getOrders = function () {
        return this.http.get(this.baseUrl + "/pedidos");
    };
    SharedService.prototype.deleteOrder = function (id) {
        return this.http["delete"](this.baseUrl + "/pedidos/" + id);
    };
    SharedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
