const port = process.env.PORT || 3000

module.exports = {
    Server: 'production',
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
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
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
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
        }
    }
};
