import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv?.config();

const PORT: string | number = process?.env?.PORT || 8080;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static(join(__dirname, '/'))); // Serve static files from the '/' directory

import { errorObject } from './types/generalTypes.js';

// Micro routes
import demoRoutes from './routes/demo.routes.js';
// Add rest of your micro routes here

// Use micro routes
app.use('/demo', demoRoutes);
// Add rest of micro routes to put use in here

// Middleware to handle any errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: errorObject, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ name: err.name, message: err.message, stack: err.stack });
});

// Middleware to handle 404 errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        error: {
            code: 404,
            message: 'Not Found',
            description: 'The requested resource was not found on the server.',
            suggestedAction: 'Check the resource URL or verify that the resource exists.',
        },
    });
});

app.listen(PORT, () => {
    console.log(`NodeJS with express in typescript server is running on port ${PORT}`);
});
