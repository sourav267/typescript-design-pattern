interface IProductA{
    operationA(): string;
}

interface IProductB{
    operationB(): string;
    combinedOperation(collaborator: IProductA): string;
}

interface IFactory{
    createProductA(): IProductA;
    createProductB(): IProductB;
}

class ProductA implements IProductA {
    public operationA(): string {
        return "This is a result of Operation A";
    }
}

class ProductB implements IProductB {
    public operationB(): string {
        return "This is a result of Operation B";
    }

    public combinedOperation(collaborator: IProductA): string {
        const result = collaborator.operationA();
        return `This is a result of Product B collobrating with ${result}`;
    }
}

class Factory implements IFactory {
    createProductA(): IProductA {
       return new ProductA();
    }
    createProductB(): IProductB {
        return new ProductB();
    }

}

// Client code
const factory = new Factory();
const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));