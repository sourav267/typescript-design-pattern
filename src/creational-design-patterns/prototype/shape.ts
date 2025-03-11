interface ShapeProperties{
    color: string
    x: number
    y: number
}

abstract class Shape {
    constructor(public properties: ShapeProperties) {
    }
    abstract clone(): Shape;

}

class Rectangle extends Shape {
    constructor(properties: ShapeProperties, width: number, height: number) {
        super(properties);
    }

    public clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color:  this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };

        return new Rectangle(clonedProperties, this.width, this.height);
    }
}

class Circle extends Shape {
    constructor(properties: ShapeProperties, radius: number) {
        super(properties);
    }

    public clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color:  this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };

        return new Circle(clonedProperties, this.radius);
    }
}

let redRectangle: Shape = new Rectangle({color: "red", x: 20, y: 100}, 10, 20);

let anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = 'blue';

console.log(anotherRectangle);
console.log(redRectangle);