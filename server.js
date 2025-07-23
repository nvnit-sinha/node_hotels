//Day 1

// const notes = require('./notes.js')
// var _ = require('lodash');
// var age = notes.age;
// console.log(age)
 
// var res = notes.addNumber(3,5);
// console.log(res)

// var data = ['person', 'person' , 1 , 1 , 2, 2, 'name', 'age' , '2'];
// var filter = _.uniq(data);
// console.log(filter)

// console.log(_.isString('Navneet'))
// console.log(_.isString(349))

// console.log("server file is running")

// var add = (a,b) => a+b;             //arrow function

// var result = add(4,5);
// console.log(result);

// (function(){
//     console.log("Navneet")
// })();


// function callback(){
//     console.log("Callback function");
// }

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result:' +result)
//     callback();
// }

// add(3,456789,callback);



// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username)

// fs.appendFile('greeting.txt','Hi' +user.username + '!\n',  () => {console.log('file is created')});

// console.log(os)
// console.log(fs)




//Day 2

//json to Object
// const jsonString = '{"name": "john", "age":30,"city": "NewYork"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject)


// //Object to json
// const object = {
//     name: "Navneet",
//     age: 23
// }

// const jsonObj = JSON.stringify(object);
// console.log(jsonObj);

// console.log(typeof(jsonObj))        //json is a type of string.




//Aaja Server Banate hai
const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to my Hotel...')
})

app.get('/paneer', (req,res) => {
    res.send('Sure sir, I would love to serve you that..')
})

app.get('/idli', (req,res) => {
    var customizedIdli = {
        name : 'ravaIdli',
        size : 'XL',
        isSambhar : true,
        isChutney : false
    }
    res.send(customizedIdli)
})

//Import the routers
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRoutes);
app.use('/menuItem',menuItemRoutes)

app.listen(3000, () => {
    console.log('listening on port 3000')
})




