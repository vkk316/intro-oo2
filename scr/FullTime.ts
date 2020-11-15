export class FullTime extends Worker { //inheritance
    salary: number

    constructor(name: string, salary: number){
        super(name) //class that ontop self
        this.salary = salary //class that ontop self
    }

    getExpenses(): number{
        return this.salary
    }
}