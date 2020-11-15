export class Employee {
    readonly name: string //when constructor done name immutable
    salary: number

    constructor(name: string, salary: number){
        this.name = name
        this.salary = salary
    }

    getExpenses(): number{
        return this.salary
    }
}