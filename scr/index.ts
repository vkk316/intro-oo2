import {Employee} from "./Employee"

let employees = [
    new Employee('Simon', 65000),
    new Employee('Kumu', 45689),
    new Employee('Nawawee', 200000)
]

let total_salary = employees.reduce((total, current) => total + current.salary, 0)

console.log(`= ${total_salary}`)

console.log("Hello world")