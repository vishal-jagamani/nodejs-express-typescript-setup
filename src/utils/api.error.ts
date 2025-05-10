interface error extends Error {
    status?: number;
    description?: string;
    suggestedAction?: string;
    isOperational?: boolean;
}

export const createApiError = (status: number, message: string, description: string, suggestedAction: string) => {
    const err = new Error(message) as error;
    err.status = status;
    err.description = description;
    err.suggestedAction = suggestedAction;
    err.isOperational = true;
    return err;
};
