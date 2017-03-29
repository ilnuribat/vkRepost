const bodyParser = require('body-parser');

module.exports = (server, express) => {
    server.use(express.static('public'))
    server.use(bodyParser.urlencoded({ extended: true }));
    server.set('json spaces', 4);
    server.set('views', './views');
    server.set('view engine', 'pug');
    server.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
    });
}