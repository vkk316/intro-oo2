import {FullTime} from "./FullTime"
import PartTime from "./PartTime"
import Worker from "./Worker"

export default class Company {
    readonly title: string
    employees: Worker[]

    constructor(title: string, employees: Worker[]){  //polymorphiism
        this.title = title
        this.employees = employees
    }

    calculateExpenses(){
        let expenses = this.employees.reduce((total, current) => total + current.getExpenses(), 0)

        console.log(` = ${expenses}`)
    }
}