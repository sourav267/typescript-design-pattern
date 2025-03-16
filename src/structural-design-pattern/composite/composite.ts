interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

class Developer implements Employee{
    constructor(public name: string,private salary:number){}
    public getName() {
        return this.name;
    }
    public getSalary(): number {
        return this.salary;
    }
    public getRole(): string {
        return "Developer";
    }
}


class Designer implements Employee{
    constructor(public name: string,private salary:number){}
    public getName() {
        return this.name;
    }
    public getSalary(): number {
        return this.salary;
    }
    public getRole(): string {
        return "Designer";
    }
}


interface CompositeEmployee extends Employee {
    addEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployees(): Employee[];
}


class Manager implements CompositeEmployee {
    private employees: Employee[] = [];

    constructor(private name: string,private salary:number) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return "Manager";
    }

    getSalary(): number {
        return this.salary;
    }

    removeEmployee(employee: Employee): void {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
        }
    }
}

let dev1 = new Developer("Sourav", 12000);
let designer = new Designer("Sourav", 15000);

let manager = new Manager("Kirav", 12000);
manager.addEmployee(dev1);
manager.addEmployee(designer);

console.log(manager);
