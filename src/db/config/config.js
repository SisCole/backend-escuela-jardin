require('dotenv').config();

const config = {
    development: {
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASS || 'root',
        database: process.env.DATABASE_NAME || 'db_jardin',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 3306,
        dialect: 'mysql',
        logging: false,
    },
    test: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'postgres',
        logging: false,
    },
    production: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};

module.exports = config;