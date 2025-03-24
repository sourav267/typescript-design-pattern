interface FilterStrategy {
    apply(image: string): void;
}

class GrayScaleStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Applying grayscale to ${image}`);
    }
}

class SepiaStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Applying sepia scale to ${image}`);
    }
}

class NegativeStrategy implements FilterStrategy {
    public apply(image: string): void {
        console.log(`Applying negative scale to ${image}`);
    }
}


class ImageProcessor {
    private _strategy: FilterStrategy;

    constructor(strategy: FilterStrategy) {
        this._strategy = strategy;
    }

    public setFilterStrategy(strategy : FilterStrategy): void {
        this._strategy = strategy;
    }

    public applyFilter(image: string): void {
        this._strategy.apply(image);
    }
}

const imageProcessor = new ImageProcessor(new GrayScaleStrategy());
imageProcessor.applyFilter("Image1.jpg");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("Image2.jpg");