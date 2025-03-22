class ArrayIterator<T> {
    private position: number = 0;
    constructor(private collection: T[]) {}

    public next():T {
        // Get the next element in the collection
        const result = this.collection[this.position];
        this.position++;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}


// client Code

const array: number[] = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator<number>(array);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());


const arrayString = ["hello", "world"];
const iteratorString = new ArrayIterator<string>(arrayString);
console.log(iteratorString.next());