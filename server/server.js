//Bring in express
const express = require( 'express' );
//make an instance of our express web server
const app = express();
//setup our public folder to send static files to the client
app.use(express.static( 'server/public' ) );

//setup how to read things from the request body
const bodyParser = require( 'body-parser' );
app.use(bodyParser.urlencoded( { extended: true} ) );

let newValues = [ ];
let previousValues = [ ];
let total = 0;

function chooseOperator(newValues){
    console.log(newValues);
    if (newValues.operator === 'add-values'){
        newValues.operator = '+'; 
        total = Number(newValues.integer1) + Number(newValues.integer2);
    } else if( newValues.operator === 'subtract-values'){
        newValues.operator = '-';
        total = Number(newValues.integer1) - Number(newValues.integer2);
    } else if( newValues.operator === 'multiply-values'){
        newValues.operator = '*';
        total = Number(newValues.integer1) * Number(newValues.integer2);
    } else if( newValues.operator === 'divide-values'){
        newValues.operator = '/';
        total = Number(newValues.integer1) / Number(newValues.integer2)
    }
    console.log(total);
    previousValues.push({
        integer1: newValues.integer1,
        integer2: newValues.integer2,
        operator: newValues.operator,
        total: total,
    });
}// end chooseOperator



app.post('/values', (req, res) =>{
    newValues = req.body
    console.log('Received values', newValues);
    chooseOperator(newValues);
    res.sendStatus(201);
});

app.get('/values', (req, res) => {
    res.send(previousValues);
});

//tell server to listen on a port
const PORT = 5000;
app.listen( PORT, () => {
    console.log( 'Listening on port ${PORT}...');
});