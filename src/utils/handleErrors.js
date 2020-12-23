import HTTPError from "../errors/httpError";
const handleErrors = (err, req, res, next) => {
    if (err instanceof HTTPError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.getMessage(),
            errors: err.getBody(),
        });
    }

    console.error(err);
    return res.status(500).json({
        status: 'error',
        message: err.message,
        error: err.stack
    });
}

export default handleErrors;