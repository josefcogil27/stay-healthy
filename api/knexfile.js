const port = process.env.PORT || 3000

export default {
    Sever: 'production',
    PORT: port,
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            user: "postgres",
            password: "root",
            database: "stay_healthy"
        },
        migrations: {
            directory: "./migration"
        },
        seeds: {
            directory: "./seed"
        }
    },
    production: {
        client: "pg",
        connection: {
            host: "",
            user: "",
            password: "",
            database: ""
        },
        migrations: {
            directory: "./migration"
        },
        seeds: {
            directory: "./seed"
        }
    }
};
