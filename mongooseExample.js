const mongoose = require("mongoose");
const Person = require("./modules/Person");

const uri = 'mongodb://localhost:27017/mongotest';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to databse...');
});

let person = new Person({ name: 'Petkan', age: 25 });
// person.save((err, result) => {
//     if(err) return console.log(err);

//     console.log(result);
// }); 

// person.save()
//     .then(res => {
//         console.log(res)
//     });


Person.find({})
    .then(data => {
        data.forEach(x => {
            console.log(`I'm born ${x.birthYear}`);
        });
    });


Person.updateOne({_id: "6037b4e0a653ee2bcc0ed7ee"}, {$set: {name: 'Peter'}})
    .then(res => console.log(res));