import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';

let sequelize: Sequelize | null = null;

const initDatabase = async () => {
    try {
        console.log('Starting database initialization...');
        
        if (sequelize instanceof Sequelize) {
            console.log('Reusing existing database connection');
            return sequelize;
        }

        console.log('Creating new Sequelize instance...');
        sequelize = new Sequelize({
            database: process.env.DB_NAME,
            dialect: 'postgres',
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '5432'),
            models: [User],
            logging: true, // Enable SQL logging
            dialectOptions: {
                ssl: process.env.NODE_ENV === 'production' ? {
                    require: true,
                    rejectUnauthorized: false
                } : false
            }
        });

        // Add models explicitly
        console.log('Adding models to Sequelize...');
        sequelize.addModels([User]);
        
        console.log('Testing database connection...');
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        
        console.log('Current NODE_ENV:', process.env.NODE_ENV);
        
        // Force sync in development, normal sync in production
        if (process.env.NODE_ENV === 'development') {
            console.log('Development mode: Force syncing database...');
            await sequelize.sync({ force: true });
            console.log('Database was force synced successfully (all tables dropped and recreated).');
        } else {
            console.log('Production mode: Normal syncing database...');
            await sequelize.sync();
            console.log('Database was synced successfully.');
        }
        
        // Verify models are loaded
        const models = sequelize.models;
        console.log('Loaded models:', Object.keys(models));
        
        return sequelize;
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    }
};

export default initDatabase;
