console.log('hello');

$(onReady);

function onReady() {
    console.log('Hi from jQuery');
    $('#equal-button').on('click', inputValues );
    $('.operator-choices').on('click', choiceOfOperator);
    getValues();
};
let operator = '';

function choiceOfOperator(){
    operator = $(this).attr('id');
    console.log('operator choice was:', operator);
}//end choiceOfOperator

function inputValues(){
    let values = {
        integer1: $( '#first-inputs').val(),
        operator: operator,
        integer2: $( '#second-inputs' ).val(),
    };
    console.log('Values:', values);
    $.ajax({
        method: 'POST',
        url: '/values',
        data: values,
    })//end ajax
    .then  (function (response){
        //console.log('Values');
        getValues();
    })
    .catch(function(error) {
        console.log('Error from server', error);
        alert('Sorry, could not retrieve input, try again');
    })
    //clear inputs
    $( '#first-inputs' ).val( '' );
    $( '#second-inputs' ).val( '' );
}//end inputValues

function getValues(){
    $.ajax({
        method: 'GET',
        url: '/values',
    })
    .then(function( response ){
        console.log('Response from server', response );
        $('#values-total').empty();
        if( response.length > 0){
        render (response);
        }
    })
    .catch( function( error ){
        console.log('Error from server', error );
        alert('Sorry, try again later.');
    })
    console.log('After making request...');
}//end getValues

function render(previousValues){
    $('#values').empty();
    $('#value-total').text(` ${previousValues[previousValues.length-1].total}`);
    for(let i= 0; i<previousValues.length; i++){
        //console.log(`${previousValues[i].integer1} ${previousValues[i].operator} ${previousValues[i].integer2}${previousValues[i].total}`);
        $('#values').append(`
            <li> ${previousValues[i].integer1} ${previousValues[i].operator} ${previousValues[i].integer2} = ${previousValues[i].total}</li>
        `);
    }
}