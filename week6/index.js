let express = require('express');
let app = express();

let fruits = {
    "data" : [
        {
            name: "apple",
            color: "varies; green, yellow, red",
            season: "late summer to late October"
        },
        {
            name: "orange",
            color: "orange",
            season: "varies; December to March traditionally"
        },
        {
            name: "grapes",
            color: "purple",
            season: "August through October"
        },
        {
            name: "cherry",
            color: "red or yellow",
            season: "May through July"
        },
        {
            name: "watermelon",
            color: "pink and green",
            season: "May to September"
        },
        {
            name: "blackberry",
            color: "blueish black",
            season: "Late spring to end of summer"
        },
        {
            name: "raspberry",
            color: "red",
            season: "June to September"
        },
        {
            name: "peach",
            color: "peach, pinkish orange",
            season: "May to early September"
        },
        {
            name: "cantaloupe",
            color: "orange",
            season: "June to August"
        },
        {
            name: "banana",
            color: "yellow",
            season: "year round"
        },
        {
            name: "strawberry",
            color: "red",
            season: "February to July"
        },
        {
            name: "blueberry",
            color: "blue",
            season: "varies; April to September traditionally"
        }
    ]
}


app.use('/', express.static('public'));

app.get('/about', (request, response) => {
    response.send("this is a webpage about fruit. Listing their color and their peak growing season within the U.S.");
})

app.get('/fruits', (request, response) => {
    response.json(fruits);
})

app.get('/fruits/:fruit', (request, response) => {
    console.log(request.params.fruit);
    let user_fruit = request.params.fruit;
    let user_obj;
    for (let i=0; i<fruits.data.length; i++) {
        if(user_fruit == fruits.data[i].name) {
            user_obj = fruits.data[i];
        }
    }
    console.log(user_obj);
    if (user_obj) {
        response.json(user_obj);
    } else {
        response.json({status: "info not present"});
    }
})

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})