const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect((err) => {
    if(err) {
        return console.log(err);
    }

    let db = client.db("catagram");
    let catsCollection = db.collection("cats");

    catsCollection.find({}, (err, result) => {
        if(err) {
            return console.log(err);
        }

        result.toArray((err, result) => {
            console.log(result);
        });
    });
});