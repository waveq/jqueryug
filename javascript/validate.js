$(document).ready(function (){

	$(".send").click(function() {
		validateForm($(this));
	});



	function validateForm(item) {
		item.siblings(".names").checkNames();
		item.siblings(".nick").regexTest({pattern: "^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$"});
		item.siblings(".email").checkEmail();//.addClass('gr');
	}
		
});
