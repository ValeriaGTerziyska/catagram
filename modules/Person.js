const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

personSchema.methods.getInfo = function () {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`);
}

personSchema.virtual("birthYear")
    .get(function() {
        return 2021 - this.age;
    })
    .set();


const Person = mongoose.model("Person", personSchema);


module.exports = Person;