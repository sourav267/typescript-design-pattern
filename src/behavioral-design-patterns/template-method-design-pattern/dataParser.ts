abstract class DataParser {
    public parseData():void{
        this.loadData();
        const data = "Sample data";
        const parsedData = this.parse(data);
        this.validate(parsedData);
        this.useData(parsedData);
    }

    protected loadData():void {
        console.log("Loading data");
    }

    protected validate(data: any):void {
        console.log("Validating data" + data);
    }

    protected useData(data: any):void {
        console.log("Using data" +data);
    }

    protected abstract parse(data: any):any;
}

class JSONParser extends DataParser {
    protected parse(data: any):any{
        console.log("Parsing data as XML");
        return data;
    }
}

class XMLParser extends DataParser {
    protected parse(data: any):any{
        console.log("Parsing data as XML");
        return data;
    }
}

function dataParser(dataParser: DataParser):any{
    dataParser.parseData();
}

console.log("Parsing JSON data");
dataParser(new JSONParser());

console.log("Parsing XML data");
dataParser(new XMLParser());
