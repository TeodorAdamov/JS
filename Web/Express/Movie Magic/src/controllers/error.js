module.exports = {
    errorController: (req, res) => {
        const statusCode = 404;
        const message = 'Page Not Found';

        res.status(statusCode).render('error', { message, statusCode })
    }
}