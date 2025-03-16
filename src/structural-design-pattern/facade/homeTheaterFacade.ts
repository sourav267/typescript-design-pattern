class Amplifier{
    turnOn(): void{
        console.log("Amplifier is turned on");
    }
    setVolume(level: number):void{
        console.log(`Volume is ${level}`);
    }
}

class DvdPlayer{
    turnOn():void{
        console.log("DvdPlayer is turned on");
    }

    play(movie:string): void{
        console.log(`Playing ${movie}`);
    }
}

class Projector {
    turnOn() : void{
        console.log("Projector is turned on");
    }
    setInput(dvdPlayer:DvdPlayer): void{
        console.log("Projector input set to DvdPlayer");
    }
}

class Lights{
    dim(level:number):void{
        console.log(`Lights are dimmed to ${level}%`);
    }
}

class HomeTheaterFacade{
    constructor(private amplifier:Amplifier, private dvdPlayer:DvdPlayer, private projector:Projector, private lights:Lights){
    }

    watchMovie(movie: string):void{
        console.log("Get ready to watch a movie...");
        this.lights.dim(10);
        this.amplifier.turnOn();
        this.amplifier.setVolume(5);
        this.dvdPlayer.turnOn();
        this.projector.setInput(this.dvdPlayer);
        this.dvdPlayer.play(movie);
    }
}

let amplifier = new Amplifier();
let dvdPlayer = new DvdPlayer();
let projector = new Projector();
let lights = new Lights();

let homeTheater = new HomeTheaterFacade(
    amplifier,
    dvdPlayer,
    projector,
    lights
);

homeTheater.watchMovie("Inception");