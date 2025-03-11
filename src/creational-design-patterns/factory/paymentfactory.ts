abstract class PaymentProcessor {
    constructor(
        public amount: number,
    ) {
    }

    abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
    processPayment() {
        // Insert PayPal-specific payment processing logic here.
        console.log(`Processing PayPal payment of $${this.amount}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    processPayment() {
        // Insert Stripe-specific payment processing logic here.
        console.log(`Processing Stripe payment of $${this.amount}`);
    }
}

class BankTransferProcessor extends PaymentProcessor {
    processPayment() {
        // Insert bank transfer-specific payment processing logic here.
        console.log(`Processing Bank Transfer payment of $${this.amount}`);
    }
}


class PaymentFactory {
    public createProcessor(type: 'paypal' | 'stripe' | 'bank', amount: number): PaymentProcessor {
        switch (type) {
            case 'paypal':
                return new PaypalProcessor(amount);
            case 'stripe':
                return new StripeProcessor(amount);
            case 'bank':
                return new BankTransferProcessor(amount);
            default:
                throw new Error(`Unknown type '${type}' for ${type}`);
        }
    }
}

const paymentFactory = new PaymentFactory();

const paypal = paymentFactory.createProcessor("paypal", 200);
paypal.processPayment();