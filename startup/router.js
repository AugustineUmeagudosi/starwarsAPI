const express = require("express");
const errorHandler = require('../src/helpers/errorHandler');

module.exports = function (app) {
    // welcome route
    app.use('/', express.Router().get("/api/welcome", (req, res) => res.status(200).json({ 
        status: 'Welcome!',
        message: "Hello, welcome to starwars API, haha!" 
    }) ));

    // starwars routes

    // 404 route
    app.use((req, res) => res.status(404).json({
        status: 'Not Found',
        message: 'oooops! page not found',
    }));

    //Central error handling
    app.use(errorHandler);                        
};