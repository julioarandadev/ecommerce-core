import mongoose from 'mongoose';

const URI = 'mongodb://localhost/ecommerce-core-db';


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(db => console.log('Mongo DB is connected: ', URI))
    .catch(err => console.error(err));

module.exports = mongoose;