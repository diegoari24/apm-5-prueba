"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "calculadora";
        this.airport = 3900;
        this.app = 700;
        this.units = 50;
        this.festive = 1900;
        this.default = 4100;
    }
    //rides: Ride[] = RIDES;
    AppComponent.prototype.onSelect = function (ride) {
        this.selected = ride;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/ride.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
const RIDES: Ride[] = [
    {
        airport: 3900
    },
    {
        app: 700
    },
    {
        units: 50
    },
    {
       festive: 1900
    },
    {
        default: 4100
    },
];
*/
//# sourceMappingURL=app.component.js.map