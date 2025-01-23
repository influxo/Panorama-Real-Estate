import { Sequelize } from 'sequelize-typescript';
import { User } from '../src/models/User';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('Starting database initialization script...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Database:', process.env.DB_NAME);

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    models: [User],
    logging: true,
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? {
            require: true,
            rejectUnauthorized: false
        } : false
    }
});

async function init() {
    try {
        // Add models explicitly
        sequelize.addModels([User]);
        
        console.log('Testing database connection...');
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        
        console.log('Development mode: Force syncing database...');
        await sequelize.sync({ force: true });
        console.log('Database was force synced successfully (all tables dropped and recreated).');
        
        const models = sequelize.models;
        console.log('Loaded models:', Object.keys(models));
        
        process.exit(0);
    } catch (error) {
        console.error('Database initialization error:', error);
        process.exit(1);
    }
}

init();
