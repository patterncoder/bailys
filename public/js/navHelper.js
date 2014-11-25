
$(document).ready(function () {
    //$('ul.nav > li').click(function (e) {
    //    e.preventDefault();
    //    $('ul.nav > li').removeClass('active');
    //    $(this).addClass('active');
    //});

    $('ul.nav > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');
});