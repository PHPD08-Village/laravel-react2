import $ from 'jquery';

$(function() {
    console.log('jQuery is ready in function1.js!');
    $('button').on('click', function() {
        alert('Button in custom1.js clicked!');
    });
});
