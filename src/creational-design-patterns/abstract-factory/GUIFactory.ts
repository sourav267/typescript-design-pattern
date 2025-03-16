interface Button {
    render(): void;
    onClick(f:Function): void;
}

interface Checkbox {
    render(): void;
    toggle(): void;
}

interface GUIFactory{
    createButton(): Button;
    createCheckBox(button: Button): Checkbox;
}

class WindowsButton implements Button {
    render():void{
        console.log("Render a button in Windows style");
    }

    public onClick(f:Function):void{
        console.log("Clicked on a button in Windows style");
        f();
    }
}

class WindowsCheckBox implements Checkbox {
    constructor(private button: Button) {
    }

    public render():void{}
    toggle(): void {
        this.button.onClick(() => { console.log("Window checkbox toggled"); });
    }
}

class MacOSButton implements Button {
    render():void{
        console.log("Render a button in MacOS style");
    }

    public onClick(f:Function):void{
        console.log("Clicked on a button in MacOS style");
        f();
    }
}

class MacOSCheckBox implements Checkbox {
    constructor(private button: Button) {
    }

    public render():void{}
    toggle(): void {
        this.button.onClick(() => { console.log("MacOS checkbox toggled"); });
    }
}

class WindowsFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }
    public createCheckBox(button: Button): Checkbox {
        return new WindowsCheckBox(button);
    }
}

class MacOSFactory implements GUIFactory {
    public createButton(): Button {
        return new MacOSButton();
    }
    public createCheckBox(button: Button): Checkbox {
        return new MacOSCheckBox(button);
    }
}

function renderUI(factory: GUIFactory){
    const button = factory.createButton();
    const checkbox = factory.createCheckBox(button);

    button.render();
    checkbox.render();

    button.onClick(() => {
        console.log("Button clicked");
    });
    checkbox.toggle();
}

// renderUI(new WindowsFactory());
renderUI(new MacOSFactory());