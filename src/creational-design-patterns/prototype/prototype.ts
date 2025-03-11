interface UserDetails{
    name: string;
    age: number;
    email: string;
}

interface Prototype{
    clone() : Prototype;
    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype{
    constructor(private user: UserDetails){}

    public clone(): Prototype {
        const clone = Object.create(this);
        clone.user = {...this.user};
        return clone;
    }

    getUserDetails(): UserDetails {
        return this.user;
    }
}


let user1 = new ConcretePrototype({
    name: 'Sourav',
    age: '29',
    email: 'sk@gmail.com'
})

let user2 = user1.clone();

console.log(user1 === user2);