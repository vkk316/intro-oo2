"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company(title, employees) {
        this.title = title;
        this.employees = employees;
    }
    Company.prototype.calculateExpenses = function () {
        var expenses = this.employees.reduce(function (total, current) { return total + current.getExpenses(); }, 0);
        console.log(" = " + expenses);
    };
    return Company;
}());
exports.default = Company;
