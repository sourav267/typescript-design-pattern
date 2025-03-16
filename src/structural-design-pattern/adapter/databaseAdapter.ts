class MySqlDatabase {
    connectToMySql(uri: string): void {
        console.log(`connectToMySql: ${uri}`);
    }

    executeMySqlQuery(query: string): void {
        console.log(`executeMySql: ${query}`);
    }
}

class PostgresSqlDatabase {
    connectToPostgres(uri: string): void {
        console.log(`connectToPostgres: ${uri}`);
    }
    executePostgresSqlQuery(query: string): void {
        console.log(`executePostgresSql: ${query}`);
    }
}

class DatabaseAdapter {
    constructor(private database: PostgresSqlDatabase) {}
    connectToMySql(uri: string): void {
        this.database.connectToPostgres(uri);
    }
    executeMySqlQuery(query: string): void {
       this.database.executePostgresSqlQuery(query);
    }
}

let database= new DatabaseAdapter(new PostgresSqlDatabase());
database.connectToMySql('mySqlDatabase');
database.executeMySqlQuery('postgres');