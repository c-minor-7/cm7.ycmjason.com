const MongoClient = require('mongodb').MongoClient;

const dbPromise = MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true },
).then(client => client.db('cm7'));

// if anything went wrong connecting db
dbPromise.catch(e => {
  console.error(e);
  console.error('Cannot connect to mongodb...');
  process.exit(1);
});

module.exports = new Proxy({}, {
  get(target, collectionName) {
    return new Proxy({}, {
      get(target, methodName) {
        return async (...args) => {
          const collection = await dbPromise.then(db => db.collection(collectionName));
          return collection[methodName](...args);
        };
      },
    });
  },
});
