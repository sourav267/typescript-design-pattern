class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message:string): void {
        const timestamp = Date.now();
        console.log(`${timestamp}: ${message}`);
    }
}

// let logger1 = Logger.getInstance();
// logger1.log("This is the first message");

// class Application {
//     constructor(private logger: Logger) {
//     }
//
//     run(): void {
//         this.logger.log('info');
//         this.logger.log('info1');
//     }
// }
//
// let logger = Logger.getInstance();
// let app = new Application(logger);
//
// app.run();