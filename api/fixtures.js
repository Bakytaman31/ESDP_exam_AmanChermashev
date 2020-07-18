const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require("nanoid");

const User = require('./models/User');
const Cafe = require('./models/Cafe');
const Picture = require('./models/Picture');
const Rate = require('./models/Rate');


const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [user1, user2] = await User.create({
        username: 'user1',
        password: '123',
        token: nanoid()
    }, {
        username: 'user2',
        password: '123',
        token: nanoid()
    }, {
        username: 'admin',
        password: '123',
        token: nanoid()
    });

    const [cafe1, cafe2] = await Cafe.create({
        title: 'Cafe#1',
        description: 'This is some example description fo Cafe#1',
        image: 'uploads/fixtures/cafe1.jpeg'
    }, {
        title: 'Cafe#2',
        description: 'This is some example description fo Cafe#2',
        image: 'uploads/fixtures/cafe2.jpg'
    });

    await Picture.create({
        image: 'uploads/fixtures/image1.jpeg',
        cafe: cafe1,

    }, {
        image: 'uploads/fixtures/image2.jpeg',
        cafe: cafe1,
    }, {
        image: 'uploads/fixtures/image3.jpeg',
        cafe: cafe2
    }, {
        image: 'uploads/fixtures/image4.jpeg',
        cafe: cafe2,
    });

    await Rate.create({
        food: 5,
        service: 5,
        interior: 5,
        author: user1,
        cafe: cafe1
    }, {
        food: 2,
        service: 4,
        interior: 1,
        author: user2,
        cafe: cafe2
    });


    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});