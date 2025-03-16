interface ServerRequest {
    handle(request: any): void;
}

class BaseServer implements ServerRequest {
    handle(request: any) {
        console.log("Handling Request", request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {

    constructor(protected serverRequest: ServerRequest) {
    }
    abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
    handle(request: any): void {
        console.log("Handling Request " + "Middleware", request);
        this.serverRequest.handle(request);
    }
}


class AuthMiddleware extends ServerRequestDecorator {
    handle(request: any): void {
        if(request.isAuthenticated) {
            console.log("Request is authenticated");
            this.serverRequest.handle(request);
        }else{
            console.log("Request was not authenticated");
        }
    }
}


//Client code
const request = {
    isAuthenticated: false,
    body: "Hello World!"
}

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);