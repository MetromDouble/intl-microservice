const mongoose = require('mongoose');
const chalk = require('chalk');
const _ = require('lodash');
const walk = require('walk');
const path = require('path');

mongoose.Promise = global.Promise;

const models = {};

function loadModels() {
  return new Promise((resolve, reject) => {
    // load all models
    const walker = walk.walk(__dirname);

    walker
      .on('file', (root, fileStats, next) => {
        if (fileStats.name === 'index.js') return next();
        const nameNoExtension = fileStats.name.replace('.js', '');
        const schemaName = _.startCase(nameNoExtension).split(' ').join('');
        const model = require(path.resolve(__dirname, fileStats.name)); // eslint-disable-line no-unused-vars

        models[schemaName] = mongoose.model(schemaName);
        next();
      })
      .on('errors', reject)
      .on('end', () => {
        console.log(chalk.green('mongoose models loaded'));
        resolve();
      });
  });
}

// Initialize Mongoose
async function connect(MONGODB_URI, MONGO_DEBUG = false) {
  try {
    if (!MONGODB_URI) throw new Error(chalk.red('Mongo Url to connect is required.'))
    // Load all the models before connecting to DB
    await loadModels();
    mongoose.set('debug', MONGO_DEBUG);
    console.log(chalk.yellow(`connecting mongo to: ${MONGODB_URI}`));
    await mongoose.connect(MONGODB_URI, {
      useMongoClient: true,
      promiseLibrary: global.Promise
    });
    console.log(chalk.green('connected to mongodb database'));
  } catch (e) {
    if (e) throw e;
  }
}

function disconnect() {
  console.log(chalk.yellow('Mongodb disconnected'));
  return mongoose.disconnect();
}

module.exports = {
  mongoose,
  connect,
  disconnect,
  models,
};
