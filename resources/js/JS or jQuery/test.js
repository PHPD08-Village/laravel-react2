import $ from 'jquery';

export const initializeJQuery = () => {
    // 在組件掛載後初始化 jQuery
    $('h1').on('click', function () {
        alert('Element clicked!');
    });

    return () => {
        // 清理事件綁定
        $('h1').off('click');
    };
};
