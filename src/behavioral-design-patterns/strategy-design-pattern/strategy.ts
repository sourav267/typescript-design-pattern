interface PaymentStrategy {
    pay(amount: number): void;
}


class PaypalStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Pay amount Paypal: ${amount}`);
    }
}

class CreditCardStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Pay amount CreditCard: ${amount}`);
    }
}


class BitCoinStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Pay amount Bitcoin: ${amount}`);
    }
}


class ShoppingCart {
    private amount: number = 0;

    constructor(private strategy: PaymentStrategy) {}

    public setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    public addToCart(value: number): void {
        this.amount += value;
    }

    public checkout(): void {
        this.strategy.pay(this.amount);
        this.amount = 0;
    }
}

// client code
let cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(50);
cart.setPaymentStrategy(new CreditCardStrategy());
cart.checkout();