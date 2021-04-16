console.log('hello');

$(onReady);

function onReady() {
    console.log('Hi from jQuery');
    $('#equal-button').on('click', inputValues );
};

function inputValues(){
    let values = [{
        integer: $( '#first-inputs').val(),
    },
    {
        integer: $( '#second-inputs' ).val(),
    }];
    console.log('Values:', values);
    $.ajax({
        method: 'POST',
        url: '/values',
        data: values,
    })//end ajax
    .then  (function (response){
        //console.log('Values');
        //getValues();
    })
    .catch(function(error) {
        console.log('Error from server', error);
        alert('Sorry, could not retrieve input, try again');
    })
    //clear inputs
    $( '#first-inputs' ).val( '' );
    $( '#second-inputs' ).val( '' );
}//end firstValue

