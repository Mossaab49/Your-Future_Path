require('dotenv').config();

const requiredVars = ['DATABASE_URL', 'MONGODB_URL', 'JWT_SECRET'];

requiredVars.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
});




module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,

    postgresUrl: process.env.DATABASE_URL,
    mongodbUrl: process.env.MONGODB_URL,

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
};