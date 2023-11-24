"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.isAuthenticatedCostumer = false;
        this.isAuthenticatedAdmin = false;
        this.loggedIn = new rxjs_1.BehaviorSubject(false);
        this.isLoggedIn$ = this.loggedIn.asObservable();
    }
    AuthService.prototype.login = function (credentials) {
        localStorage.setItem('token', credentials.password);
        this.loggedIn.next(true);
        if (credentials.mesa === 'cliente') {
            this.isAuthenticatedCostumer = true;
            this.router.navigate(['']);
        }
        if (credentials.mesa === 'admin') {
            this.isAuthenticatedAdmin = true;
            this.router.navigate(['/admin']);
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticatedCostumer = false;
        this.isAuthenticatedAdmin = false;
    };
    AuthService.prototype.getIsAuthenticatedCostumer = function () {
        return this.isAuthenticatedCostumer;
    };
    AuthService.prototype.getIsAuthenticatedAdmin = function () {
        return this.isAuthenticatedAdmin;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
