
// this is to handle email submission
$('#signUpForm').submit(function (event) {
    event.preventDefault();
    var $form = $(this),
        url = $form.attr('action');
    var posting = $.post(url, { email: $('#email').val() });
    posting.done(function (data) {
        if (data.success)
        {
            $('#signUpModalBody').html('Your email was successfully saved!')
        }
        console.log(data);
    });
});
