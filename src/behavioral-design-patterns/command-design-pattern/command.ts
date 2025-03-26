interface ICommand {
    execute():void;
    undo():void;
}

class Light{
    public turnOn():void{
        console.log("Light turn on");
    }

    public turnOff():void{
        console.log("Light turn off");
    }
}


class TurnOnCommand implements ICommand{
    constructor(private light:Light) {
    }

    public execute():void{
        this.light.turnOn();
    }
    public undo():void{
        this.light.turnOff();
    }
}

class TurnOffCommand implements ICommand{
    constructor(private light:Light) {
    }

    public execute():void{
        this.light.turnOff();
    }
    public undo():void{
        this.light.turnOn();
    }
}

class SimpleRemoteControl {
    private currentCommand!: ICommand;
    private undoCommand!:ICommand;
    private commandQueue:ICommand[] = [];

    public setCommand(command:ICommand){
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    public buttonWasPressed():void{
        if(this.commandQueue.length){
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }

    public undoButtonWasPressed():void{
        this.undoCommand.execute();
    }

    public hasCommands(): boolean{
        return this.commandQueue.length > 0;
    }

}


const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

// Turn On the light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

// Turn Off the light
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo Last operation
remote.undoButtonWasPressed();

// Create a command queue
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));

while (remote.hasCommands()) {
    remote.buttonWasPressed();
}