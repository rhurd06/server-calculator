//Bring in express
const express = require( 'express' );
//make an instance of our express web server
const app = express();
//setup our public folder to send static files to the client
app.use(express.static( 'server/public' ) );

//setup how to read things from the request body
const bodyParser = require( 'body-parser' );
app.use(bodyParser.urlencoded( { extended: true} ) );



let previousValues = [ ];

function totalAdd(newValues){
    let addSum += integer;
    return addSum;
}

app.post('/values', (req, res) =>{
    let newValues = req.body
    console.log('Received values', newValues);

    //save it to array
    previousValues.push(newValues);
    res.sendStatus(201);
});

// app.post('/', (req, res) =>{
//     let totalAdd = req.body
//     console.log('Adding values', totalAdd);

// })

//tell server to listen on a port
const PORT = 5000;
app.listen( PORT, () => {
    console.log( 'Listening on port ${PORT}...');
});