import $ from 'jquery';

export const apptextfunction = () => {
    console.log('jQuery is ready in Page1!');

    // jQuery 代碼放在這裡
    $('button').on('click', function() {
        alert('Button in Page1 clicked!');
    });

    $('div').on('mouseenter mouseleave', function() {
        $(this).toggleClass('hovered');
    });

    // 清理事件綁定
    return () => {
        $('button').off('click');
        $('div').off('mouseenter mouseleave');
    };
};
