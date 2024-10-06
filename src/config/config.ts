import dotenv from 'dotenv';
import path from 'path';
dotenv?.config();

const envFilePath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`);
dotenv?.config({ path: envFilePath });

export const config = {
    url: 'https://catfact.ninja',
};
