$(function(){
    $('.slider__foto').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-right.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-neхt"><img src="images/arrow-left.svg" alt=""></button>'
    });

    $('.mobale-menu').on('click',function(){
        $('.nav-list') .slideToggle();
    })
});