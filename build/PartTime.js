"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PartTime = /** @class */ (function () {
    function PartTime(name, rate) {
        this.hours = 0;
        this.name = name;
        this.rate = rate;
    }
    PartTime.prototype.work = function (hours) {
        this.hours + hours;
    };
    PartTime.prototype.getExpenses = function () {
        return this.hours * this.rate;
    };
    return PartTime;
}());
exports.default = PartTime;
