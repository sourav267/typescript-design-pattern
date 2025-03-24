abstract class CakeRecipe {

    public bakeCake():void{
        this.preHeatOven();
        this.mixIngredients();
        this.bake();
        this.coolingDown();
        this.decorate();
    }
    protected preHeatOven(): void{
        console.log("Preheating oven to 175 degree C");
    }

    protected bake(): void{
        console.log("Baking cake...");
    }

    protected coolingDown(): void{
        console.log("Cooling down...");
    }

    protected  decorate(): void{
        console.log("Decorating cake...");
    }

    protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe{
    protected mixIngredients() {
        console.log("Mixing chocolate, sugar, butter, flour, eggs");
    }

    protected decorate(){
        console.log("Decorating cake with chocolate");
    }
}

class VanillaCake extends CakeRecipe{
    protected mixIngredients() {
        console.log("Mixing vanilla extract, sugar, butter, flour, eggs");
    }
}

function bakecake(cake:CakeRecipe){
    cake.bakeCake();
}

console.log("baking a chocolate cake");
bakecake(new ChocolateCake());


console.log("baking a vanilla cake");
bakecake(new VanillaCake());

