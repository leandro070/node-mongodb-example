class Database {
    private static instance: Database;

    private constructor() {

    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    // A partir de aqui podemos usar la logica de negocio necesaria
    public query(sql) {

    }
}


const mock: Database = Database.getInstance();
mock.query("Hola mundo perri del mal");
