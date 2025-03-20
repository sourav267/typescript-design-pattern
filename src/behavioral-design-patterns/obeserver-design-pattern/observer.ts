interface Observer {
    update(subject: Subject): void;
}


class ConcreteObserve implements Observer {
    constructor(private id: number) {}
    update(subject: Subject): void {
        console.log(`Observer ${this.id} updated, new state: ${subject.getState()}`);
    }
}


interface Subject{
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
    getState(): number;
    setState(state: number): void;
}


class ConcreteSubject implements Subject {
    private observers: Observer[] = [];

    private state: number = 0;
    public addObserver(observer: Observer): void {
        const isExists =  this.observers.includes(observer);
        if (isExists) {
            return console.log('observer already exists');
        }

        this.observers.push(observer);
        console.log('observer added  successfully');
    }

    public removeObserver(observer: Observer): void {
        const observerIndex =  this.observers.indexOf(observer);
        if (observerIndex === -1) {
           return console.log('observer already exists');
        }
        this.observers.splice(observerIndex, 1);
        console.log('observer removed');
    }

    getState(): number {
        return  this.state;
    }

    notifyObserver(): void {
        this.observers.forEach(observer => observer.update(this));
    }

    setState(state: number): void {
        this.state = state;
        console.log('Setting State...');
        this.notifyObserver();
    }
}



const subject =  new ConcreteSubject();
const observer1 = new ConcreteObserve(1);

subject.addObserver(observer1);

const observer2 = new ConcreteObserve(2);
subject.addObserver(observer2);

subject.setState(123);
