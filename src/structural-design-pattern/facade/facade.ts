class Grinder{
    grindBeans(): void{
        console.log("Grinder Beans ...");
    }
}


class Boiler {
    boilWater(): void{
        console.log("Boiling Water...");
    }
}

class Brewer{
    brewCoffee():  void {
        console.log("Brewing Coffee...");
    }
}

class CoffeeMakerFacade{
    constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {
    }

    public makeCoffee() {
        this.grinder.grindBeans();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
        console.log("This Coffee is Ready");
    }
}

let grinder: Grinder = new Grinder();
let boiler: Boiler = new Boiler();
let brewer: Brewer = new Brewer();

let coffeeMaker = new CoffeeMakerFacade(grinder,boiler,brewer);
coffeeMaker.makeCoffee();