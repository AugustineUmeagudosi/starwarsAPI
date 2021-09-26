const express  = require('express');
const app =  express();
const port = process.env.PORT || 5000;
require('dotenv').config();

if (!process.env.JWT_SECRET) { console.error('FATAL ERROR: jwtPrivateKey is not defined.'); process.exit(1); }

require('./startup/securityPackages')(app);
require('./startup/db_connection');
require('./startup/router')(app);
require('./startup/pageNotFound')(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));