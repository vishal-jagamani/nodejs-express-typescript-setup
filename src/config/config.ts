import { ENV } from './env.js';

export const PORT: string | number = ENV.PORT;

export const ENABLE_AUTH: boolean = ENV.ENABLE_AUTH === 'true';

export const config = {
    url: 'https://catfact.ninja',
};
