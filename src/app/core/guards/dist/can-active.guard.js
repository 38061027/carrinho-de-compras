"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.canActiveGuard = void 0;
// auth.guard.ts
var core_1 = require("@angular/core");
var canActiveGuard = /** @class */ (function () {
    function canActiveGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActiveGuard.prototype.canActivate = function (route, state) {
        if (this.authService.getIsAuthenticatedCostumer()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    canActiveGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], canActiveGuard);
    return canActiveGuard;
}());
exports.canActiveGuard = canActiveGuard;
