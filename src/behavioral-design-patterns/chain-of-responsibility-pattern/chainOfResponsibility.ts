interface Handler{
    setNext(handler:Handler):Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler:Handler | null = null;
    setNext(handler:Handler):Handler {
        this.nextHandler = handler;
        // allows convenient chaining
        return handler;
    }
    handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class MonkeyHandler extends AbstractHandler{
    handle(request: string): string | null {
       if(request === "Banana"){
           return `Monkey: I will eat the ${request}`
       }
       return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler{
    handle(request: string): string | null {
        if(request === "Nuts"){
            return `Squirrel: I will eat the ${request}`
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler{
    handle(request: string): string | null {
        if(request === "MeatBall"){
            return `Dog: I will eat the ${request}`
        }
        return super.handle(request);
    }
}


function clientCode(handler:Handler){
    const foods = ['Nuts','Banana', 'MeatBall', 'Coffee'];
    for(const food of foods){
        console.log(`Who wants to eat ${food.toUpperCase()}`);
        const result = handler.handle(food);
        if(result) {
            console.log(result);
        }else{
            console.log(`${food.toUpperCase()} was left untouched`);
        }
    }

}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
