(function($) {

	$.fn.regexTest = function(options) {
		if(typeof(options) !== 'undefined' && typeof(options.pattern) !== 'undefined'){
			pattern = new RegExp(options.pattern);
		} else {
			console.log("Podaj wyrażenie regularne");
			return;
		}
		this.each(function() {
			if(!pattern.test(this.value)) {
				$(this).addClass('invalid');
			} else {
				if($(this).hasClass('invalid')){
					$(this).removeClass('invalid');
				}
			}
		});
		return this;
	};

	$.fn.checkEmail = function(options) {
		var pattern;
		if(typeof(options) !== 'undefined' && typeof(options.pattern) !== 'undefined'){
			pattern = new RegExp(options.pattern);
		} else {
			pattern = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$");
		}
		this.each(function() {
			if(!pattern.test(this.value)) {
				$(this).addClass('invalid');
			} else {
				if($(this).hasClass('invalid')){
					$(this).removeClass('invalid');
				}
			}
		});
		return this;
	};

	$.fn.checkNames = function(options) {
		var pattern;
		pattern = new RegExp("^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$");
		this.each(function() {
			if(!pattern.test($(this).val()) || $(this).val().length === 0) {
					$(this).addClass('invalid');
			} else {
				if($(this).hasClass('invalid')){
					$(this).removeClass('invalid');
				}
			}
		});
		return this;
	};

})(jQuery);