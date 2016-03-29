$(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.


	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit       = $('.submit');

	$mouseover.mouseover( function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click(function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.click( function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
            $('#form').fadeOut('slow');
			$(this).parent().append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});
    setTimeout(function(){
        $('.timeout').fadeIn('slow');}, 1000);

});