exports.helloWorld = (req, res, next) => {
    res.send('<h1>Halo World</h1>');
};

exports.helloMoto = (req, res, next) => {
    console.log(' request query >> ', req.query);
    res.send({
        response: req.model
    })
}