const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating:{
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 5,
  review: "Pretty solid as a fruit."
});
fruit.save();

//const personSchema = new mongoose.Schema({
//  name: String,
//  age: Number,
//  review: String
//});

//const Person = mongoose.model("Person", personSchema);

//const person = new Person({
//  name: "Satyam",
//  age: 27,
//  review: "Good person."
//});

//person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 5,
  review: "The Best Fruit"
});

const banana = new Fruit({
  name: "Banana",
  score: 5,
  review: "Good Fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 5,
  review: "The Best Fruit"
});

Fruit.insertMany([kiwi, banana, orange]).then(function(){
 console.log("successfully all fruits store in FruitsDB");
}).catch(function(err){
console.log(err);
});

Fruit.find().then(function(err, fruits){
  if(err){
  console.log(err);
  }
  else{
  console.log(fruits);
  fruits.forEach(function(fruit) {
    console.log(fruit.name);
  });
  }
});
