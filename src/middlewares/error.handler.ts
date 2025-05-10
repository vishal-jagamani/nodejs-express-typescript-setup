import { NextFunction, Request, Response } from 'express';

interface error extends Error {
    status?: number;
    isOperational?: boolean;
    description?: string;
    suggestedAction?: string;
}

// 🚨 Known API error handler
export const apiErrorHandler = async (err: error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    // Log error
    logError(req, statusCode, err);
    if (err.status && err.isOperational !== false) {
        res.status(err.status).json({
            error: {
                code: statusCode,
                message: message,
                description: err.description || 'A known error occurred in the API flow.',
                suggestedAction: err.suggestedAction || 'Please review your request or check documentation.',
            },
        });
    } else {
        next(err); // 🔁 pass to global error handler if not operational
    }
};

// 🧯 Global unknown error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = async (err: error, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    // Log error
    logError(req, statusCode, err);
    res.status(statusCode).json({
        status: false,
        error: { code: statusCode, message, ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) },
    });
};

// 🔍 Common logging helper
const logError = (req: Request, statusCode: number, err: Error) => {
    // Log the error (you might want to use a more advanced logging solution)
    console.error(`[${req.method}] ${req.url} -> ${statusCode} :: ${err.message}`);
    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
    }
};
