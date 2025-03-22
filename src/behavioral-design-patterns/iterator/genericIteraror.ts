class User{
    constructor(public name: string){}
}


interface MyIteratorResult<T>{
    value: T | null;
    done: boolean;
}


interface MyIterator<T>{
    next(): MyIteratorResult<T>;
    hasNext(): boolean;
}

interface Collection<T>{
    createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
    constructor(private users: User[]) {}

    public createIterator(): MyIterator<User> {
        return new UserIterator(this);
    }

    public getItems():User[]{
        return this.users;
    }
}

class UserIterator implements MyIterator<User> {
    private collection: UserCollection;
    private position: number = 0;

    constructor(collection: UserCollection) {
        this.collection = collection;
    }

    next(): MyIteratorResult<User> {

        if(this.hasNext()){
            return {
                value: this.collection.getItems()[this.position++],
                done: false
            }
        }else{
            return {
                value: null,
                done: true
            }
        }
    }

    hasNext(): boolean {
        return this.position < this.collection.getItems().length
    }
}


const users = [new User("Sourav"), new User("Rishabh")];

const userCollection = new UserCollection(users);

const newIterator = userCollection.createIterator();

console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());