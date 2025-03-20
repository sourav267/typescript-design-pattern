interface WeatherObserver {
    update(temperature:  number, humidity: number, pressure: number): void;
}

interface WeatherSubject{
    registerObserver(observer: WeatherObserver): void;
    removeObserver(observer: WeatherObserver): void;
    notifyObserver(): void;
}


class WeatherData implements WeatherSubject{
    private observers: WeatherObserver[] = [];

    private temperature: number | undefined;
    private pressure: number | undefined;
    private humidity: number | undefined;

    public registerObserver(observer: WeatherObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: WeatherObserver): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObserver(): void {
        if (this.temperature !== undefined
            && this.pressure !== undefined
            && this.humidity !== undefined) {
            for (let observer of this.observers) {
                observer.update(this.temperature, this.humidity, this.pressure);
            }
        }
    }

    public setMeasurement(temperature: number, pressure: number, humidity: number): void {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.notifyObserver();
    }

}

class CurrentConditionsDisplay implements WeatherObserver {
    private temperature: number | undefined;
    private pressure: number | undefined;
    private humidity: number | undefined;

    constructor(private weatherData: WeatherSubject) {
        this.weatherData.registerObserver(this);
    }
    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.display();
    }


    public display(): void {
        if (this.temperature !== undefined && this.pressure !== undefined && this.humidity !== undefined) {
            console.log(`Temperature: ${this.temperature} pressure: ${this.pressure} humidity: ${this.humidity}`);
        }else{
            console.log(`Weather data is not availabale`);
        }
    }

}

const weatherData = new WeatherData();
const currentDisplay =  new CurrentConditionsDisplay(weatherData);

// Simulate weather
weatherData.setMeasurement(80,65,30.4);
weatherData.setMeasurement(80,70,30.4);

