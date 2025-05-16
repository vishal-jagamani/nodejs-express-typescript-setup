import 'express';

declare module 'express' {
    interface Request {
        validated?: any;
    }
}
