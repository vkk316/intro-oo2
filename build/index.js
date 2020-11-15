"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var PartTime_1 = __importDefault(require("./PartTime"));
var Company_1 = __importDefault(require("./Company"));
var pt1 = new PartTime_1.default("Facus", 500);
pt1.work(10);
pt1.work(5);
var employees = [
    new Employee_1.Employee('Simon', 65000),
    new Employee_1.Employee('Kumu', 45689),
    new Employee_1.Employee('Nawawee', 200000),
    pt1
];
var company = new Company_1.default('bonmek', employees);
company.calculateExpenses();
