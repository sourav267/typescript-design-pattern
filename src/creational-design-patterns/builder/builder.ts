interface Builder {
    setPartA(): void;
    setPartB(): void;
    setPartC(): void;
}

class Product{
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }

    public listsParts(): void {
        console.log(`Product Parts: ${this.parts.join(',')}`);
    }
}

class ConcreteBuilder implements Builder {

    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    setPartA(): void {
        this.product.add("Part A");
    }

    setPartB(): void {
        this.product.add("Part B");
    }

    setPartC(): void {
        this.product.add("Part C");
    }

    public getProducts():Product {
        const result = this.product;
        this.reset();
        return result;
    }

}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimumProduct():void {
        this.builder.setPartA();
    }

    public  buildFullProduct():void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}




const builder = new ConcreteBuilder();

const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProducts();

director.buildFullProduct();

let fullProduct = builder.getProducts();
console.log(minProduct);
console.log(fullProduct);






