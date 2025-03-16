interface Database{
    connect(): void;
    query(sql: string): any;
    close(): void;
}


class PostgresSQLDatabase implements Database {
    close(): void {
        console.log('PostgresSQLDatabase close');
    }

    connect(): void {
        console.log('PostgresSQLDatabase connect');
    }

    query(sql: string): any {
        console.log(`PostgresSQLDatabase query sql: ${sql}`);
    }

}

class MongoDB implements Database {
    close(): void {
        console.log('MongoDB close');
    }

    connect(): void {
        console.log('MongoDB connect');
    }

    query(sql: string): any {
        console.log(`MongoDB query sql: ${sql}`);
    }

}



abstract class DatabaseService {
    constructor(protected  database: Database) {
    }

    abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {
    fetchData(query: string): void {

        this.database.connect();
        this.database.query(query);
        this.database.close();
    }
}

let postgresService = new ClientDatabaseService(new PostgresSQLDatabase());
postgresService.fetchData("USERS");

let mongoDBService = new ClientDatabaseService(new MongoDB());
mongoDBService.fetchData("USERS");