

$("#btnArrow").click(() => {
    $('html,body').animate({
        scrollTop: $('#brunch').offset().top
    }, 2000);
});