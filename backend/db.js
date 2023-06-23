const { MongoClient } = require('mongodb');

let ConnectionDb;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb+srv://badar191:sUWq8a3Ziqyvhhow@cluster0.0thtj3l.mongodb.net/')
      .then(client => {
        console.log('helllloooooooooo')
        ConnectionDb = client.db();
        cb(null, ConnectionDb);
      })
      .catch(err => {
        console.log(err);
        cb(err);
      });
  },

  getDb: () => ConnectionDb
};
