const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useUnifiedTopology: true });
// client.connect((err) => {
//     if(err) {
//         return console.log(err);
//     }

//     let db = client.db("catagram");
//     let catsCollection = db.collection("cats");

//     catsCollection.find({}, (err, result) => {
//         if(err) {
//             return console.log(err);
//         }

//         result.toArray((err, result) => {
//             console.log(result);
//         });
//     });
// });


// client.connect()
//     .then(res => {
//         const db = client.db('catagram');
//         const catsCollection = db.collection('cats');

//         return catsCollection.findOne({});
//     }).then(data => {
//         console.log(data);
//     });

async function run() {
    await client.connect();

    const db = client.db('catagram');
    const catsCollection = db.collection('cats');

    let firstCat = await catsCollection.findOne({});

    // console.log(firstCat)
}

run();