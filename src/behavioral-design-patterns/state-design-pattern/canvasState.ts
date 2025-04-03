interface Tool {
    onMouseDown(): void;

    onMouseUp(): void;
}


class SelectionTool implements Tool {
    onMouseDown(): void {
        console.log("Selection drawn");
    }

    onMouseUp(): void {
        console.log("Selection started.");
    }

}

class BrushTool implements Tool {
    onMouseDown(): void {
        console.log("Brush stroke started");
    }

    onMouseUp(): void {
        console.log("Brush stroke drawn");
    }

}

class EraserTool implements Tool {
    onMouseDown(): void {
        console.log("Eraser started");
    }

    onMouseUp(): void {
        console.log("Eraser drawn");
    }

}


class Canvas {
    constructor(private tool: Tool) {
    }

    setTool(tool: Tool): void {
        this.tool = tool;
    }

    public onMouseDown(): void {
        this.tool.onMouseDown();
    }

    public onMouseUp(): void {
        this.tool.onMouseUp();
    }
}

// Client code
let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseUp();
canvas.onMouseDown();