(function () {
    "use strict";
    $('#signUpForm').submit(function (event) {
        event.preventDefault();
        var $form = $(this),
            url = $form.attr('action');
        var posting = $.post(url, { email: $('#email').val() });
        posting.done(function (data) {
            if (data.success) {
                $('#modalResult').html('Your email was saved!');

            }
            else {
                $('#modalResult').html('That email already exists.');
                $('#email').val('');
            }
            console.log(data);
        });
    });

    var $signUpModal = $('#signUpModal');

    $signUpModal.on("hidden.bs.modal", function () {
        $('#email').val('');
        $('#modalResult').html('');
    });

})()
// this is to handle email submission

