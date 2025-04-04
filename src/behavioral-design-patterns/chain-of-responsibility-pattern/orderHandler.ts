class Order{
    public isValid(){
        return true;
    }

    public applyDiscount(){

    }

    public processPayment(){
        return true;
    }

    public ship(){

    }
}


interface Handler2{
    setNext(handler:Handler2):Handler2;
    handle(order: Order): string | null;
}


abstract class AbstractHandler2 implements Handler2{
    private nextHandler:Handler2 | null = null;
    handle(order: Order | string): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(order);
        }
        return null;
    }

    setNext(handler: Handler2): Handler2 {
        this.nextHandler = handler;
        return handler;
    }
}

class ValidationHandler extends AbstractHandler2{
    public handle(order : Order): string | null{
        if(order.isValid()){
            return super.handle(order);
        }
        return 'Validation failed';
    }
}

class DiscountHandler extends AbstractHandler2{
    public handle(order : Order): string | null{
        order.applyDiscount();
        return super.handle(order);
    }
}


class PaymentHandler extends AbstractHandler2{
    public handle(order : Order): string | null{
        if(order.processPayment()){
            return super.handle(order);
        }
        return 'Payment failed';
    }
}

class ShippingHandler extends AbstractHandler2{
    public handle(order : Order): string | null{
        order.ship();
        return "Order processed and shipped.";
    }
}

const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
    .setNext(new DiscountHandler())
    .setNext(new PaymentHandler())
    .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));