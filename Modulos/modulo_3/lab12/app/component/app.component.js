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
var TEACHERS = [
    {
        id: 1,
        name: "#1",
        rooms: [2, 3, 4],
        studies: [4, 5, 6]
    },
    {
        id: 2,
        name: "#2",
        rooms: [2, 3, 4],
        studies: [4, 5, 6]
    },
    {
        id: 3,
        name: "#3",
        rooms: [2, 3, 4],
        studies: [4, 5, 6]
    }
];
var STUDENTS = [
    {
        id: 1,
        name: "#3",
        grade: 4,
        classess: [3, 4, 5]
    },
    {
        id: 2,
        name: "#3",
        grade: 5,
        classess: [2, 3, 4]
    },
    {
        id: 3,
        name: "#3",
        grade: 6,
        classess: [2, 3, 4]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "student";
        this.student = STUDENTS;
        this.stundet2 = "teacher";
        this.teacher = TEACHERS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent.prototype.onSelect2 = function (teacher) {
        this.selected2 = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map