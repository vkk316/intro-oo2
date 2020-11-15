import {FullTime} from "./FullTime"
import PartTime from "./PartTime"
import Company from "./Company"

let pt1 = new PartTime("Facus", 500)
pt1.work(10)
pt1.work(5)
let employees = [
    new FullTime('Simon', 65000),
    new FullTime('Kumu', 45689),
    new FullTime('Nawawee', 200000),
    pt1
]

let company = new Company('bonmek', employees)
company.calculateExpenses()