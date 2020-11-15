"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var employees = [
    new Employee_1.Employee('Simon', 65000),
    new Employee_1.Employee('Kumu', 45689),
    new Employee_1.Employee('Nawawee', 200000)
];
var total_salary = employees.reduce(function (total, current) { return total + current.salary; }, 0);
console.log("= " + total_salary);
console.log("Hello world");
