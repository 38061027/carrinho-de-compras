"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CarrinhoService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CarrinhoService = /** @class */ (function () {
    function CarrinhoService() {
        this.carrinhoSubject = new rxjs_1.BehaviorSubject([]);
        this.carrinho$ = this.carrinhoSubject.asObservable();
    }
    CarrinhoService.prototype.adicionarItem = function (item) {
        var carrinhoAtual = this.carrinhoSubject.value;
        var index = carrinhoAtual.findIndex(function (c) { return c.id === item.id; });
        if (index === -1) {
            this.carrinhoSubject.next(__spreadArrays(carrinhoAtual, [__assign(__assign({}, item), { quantidade: 1 })]));
        }
        else {
            var novoCarrinho = __spreadArrays(carrinhoAtual);
            novoCarrinho[index].quantidade++;
            this.carrinhoSubject.next(novoCarrinho);
        }
    };
    CarrinhoService.prototype.removerItem = function (index) {
        var carrinhoAtual = this.carrinhoSubject.value;
        var novoCarrinho = __spreadArrays(carrinhoAtual.slice(0, index), carrinhoAtual.slice(index + 1));
        this.carrinhoSubject.next(novoCarrinho);
    };
    CarrinhoService.prototype.limparCarrinho = function () {
        this.carrinhoSubject.next([]);
    };
    CarrinhoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CarrinhoService);
    return CarrinhoService;
}());
exports.CarrinhoService = CarrinhoService;
