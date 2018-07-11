var Request = require('request');


//Post Request

Request.post({
    "headers": {"content-type": "application/json"},
    "url": "http://localhost:8090/api/books",
    "body": JSON.stringify({
        "book_name": "Goblet of Fire",
        "book_author": "J K Rowling",
        "book_price": "2000",
        "location": "Hyderabad",
        "no_of_pages": "400",
        "edition": "Third"
    }),
    "body": JSON.stringify({
        "book_name": "Akasa Veedilo Andala Jabili",
        "book_author": "Madhuravani",
        "book_price": "1000",
        "location": "Bezawada",
        "no_of_pages": "40",
        "edition": "Sixth"
    })
}, (error, response, body) => {
     if(error) {
         return console.dir(error);
    }
    console.log(JSON.parse(JSON.stringify(body)));

});

Request.get('http://localhost:8090/api/books', (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(JSON.parse(JSON.stringify(body)));

});



