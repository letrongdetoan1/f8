const newsRouter = require('../routes/news');
const siteRouter = require('../routes/site');

function route(app) {

    app.use('/', siteRouter );
    app.use('/news', newsRouter);

}

module.exports = route;
