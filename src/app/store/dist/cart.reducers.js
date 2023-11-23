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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.cartFoodReducer = void 0;
var store_1 = require("@ngrx/store");
var cart_actions_1 = require("./cart.actions");
var initialState = {
    name: [],
    valor: 0,
    quantity: 0
};
exports.cartFoodReducer = store_1.createReducer(initialState, store_1.on(cart_actions_1.addFood, function (state, _a) {
    var cart = _a.cart;
    return __assign(__assign({}, state), { name: __spreadArrays(state.name, [cart.name]), valor: state.valor + cart.valor, quantity: state.quantity + 1 });
}));
