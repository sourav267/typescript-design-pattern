abstract class Car {
    constructor(
        public model: string,
        public productionYear: number,
    ) {
    }

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    displayCarInfo(): void {
        console.log(`Sedan: ${this.model}, ${this.productionYear} `);
    }
}

class Suv extends Car {
    displayCarInfo(): void {
        console.log(`Suv: ${this.model}, ${this.productionYear} `);
    }
}

class HatchBack extends Car {
    displayCarInfo(): void {
        console.log(`HatchBack: ${this.model}, ${this.productionYear} `);
    }
}


class CarFactory {
    public createCar(type: 'sedan' | 'suv' | 'hatchback', model: string, productionYear: number): Car {
        switch (type) {
            case 'sedan':
                return new Sedan(model, productionYear);
            case 'suv':
                return new Suv(model, productionYear);
            case 'hatchback':
                return new HatchBack(model, productionYear);
            default:
                throw new Error(`Unknown type '${type}' for ${type}`);
        }
    }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();