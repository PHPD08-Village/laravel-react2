import $ from 'jquery';

$(function() {
    console.log('jQuery is ready in function2.js!');
    $('div').on('mouseenter mouseleave', function() {
        $(this).toggleClass('hovered');
    });
});
