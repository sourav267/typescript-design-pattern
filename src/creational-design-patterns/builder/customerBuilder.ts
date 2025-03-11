interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string) {
    }
}

interface ICustomerBuilder {
    setFirstName(firstName: string): ICustomerBuilder;
    setLastName(lastName: string): ICustomerBuilder;
    setEmail(email: string): ICustomerBuilder;
    setPhoneNumber(phoneNumber: string): ICustomerBuilder;
    build(): ICustomer;
}

class CustomerBuilder implements ICustomerBuilder {
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private phoneNumber: string = "";

    setFirstName(firstName: string): ICustomerBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): ICustomerBuilder {
        this.lastName = lastName;
        return this;
    }

    setEmail(email: string): ICustomerBuilder {
        this.email = email;
        return this;
    }

    setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber;
        return this;
    }

    build(): ICustomer {
        return new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber
        );
    }
}


class CustomerDirector {
    constructor(private builder: ICustomerBuilder) {
    }

    buildMinimal(firstName: string, lastName: string, email: string): ICustomer {
        return this.builder
            .setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
        .build();
    }
}

const customerBuilder: ICustomerBuilder = new CustomerBuilder();
const customerDirector: CustomerDirector = new CustomerDirector(customerBuilder);
const customer: ICustomer = customerDirector.buildMinimal(
    "John",
    "Doe",
    "john.doe@example.com"
);

console.log(customer);