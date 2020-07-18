const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

const users = require('./app/users');
const cafes = require('./app/cafes');
const pictures = require('./app/pictures');
const rates = require('./app/rates');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    app.use('/users', users);
    app.use('/cafes', cafes);
    app.use('/pictures', pictures);
    app.use('/rates', rates);

    app.listen(config.port, () => {
        console.log(`HTTP Server started on ${config.port} port!`);
    });
};

run().catch(error => {
    console.error(error);
});