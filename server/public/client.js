console.log('hello');

$(onReady);

function onReady() {
    console.log('Hi from jQuery');
};

function firstValue(){
    let valueOne = {
        integer: $( '#first-inputs').val(),
    }
    console.log('First value:', valueOne);
    $.ajax({
        method: 'POST',
        url: '/valone',
        data: valueOne,
    })//end ajax
    .then  (function (response){
        console.log('Value one');
        getOne();
    })
    .catch(function(error) {
        console.log('Error from server', error);
        alert('Sorry, could not retrieve input, try again');
    })
    $('#first-inputs');
}//end firstValue

