'use strict';

const mongoose = require('mongoose');
const Categories = require('./models/categories-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/luminous-mongo-demo';

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
mongoose.connect(MONGOOSE_URI, mongooseOptions);

const clothes = new Categories({ name: 'clothes', display_name: 'nike', description: 'nike clothes' });

clothes.save();