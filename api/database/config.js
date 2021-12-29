require('dotenv').config();

//database configuration
const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options:{
        trustServerCertificate: true,
    },
}
module.exports = config;