interface FileSystemComponent {
    getName(): string;
    getSize(): number;
}

class FileComponent implements FileSystemComponent {

    constructor(public name: string,public size:number) {}
    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
    addComponent(component: FileSystemComponent): void;
    removeComponent(component: FileSystemComponent): void;
    getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
    private components: FileSystemComponent[] = [];

    constructor(private name: string) {}

    addComponent(component: FileSystemComponent): void {
        this.components.push(component);
    }

    getComponents(): FileSystemComponent[] {
        return this.components;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.components.reduce(
            (total, component) => total + component.getSize(),
            0
        );
    }

    removeComponent(component: FileSystemComponent) {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

}

let file1 = new FileComponent("file1", 500);
let file2 = new FileComponent("file2", 1200);
let file3 = new FileComponent("file3", 3400);

let folder = new Folder("myFolder");
folder.addComponent(file1);
folder.addComponent(file2);
folder.addComponent(file3);

console.log(`Folder '${folder.getName()}' contains: `);
folder
    .getComponents()
    .forEach((component) =>
        console.log(
            `- ${component.getName()} with size of ${component.getSize()} bytes`
        )
    );

console.log(
    `Total size of folder '${folder.getName()}': ${folder.getSize()} bytes`
);