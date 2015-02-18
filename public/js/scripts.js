var add = '<div id = "lastchoice"> <input type="text" name="choicearr" placeholder="Choice" class="form-control"> </div>';

function addChoice() {
	$('#lastchoice').one('click || keypress', function() {
		if ($(this).attr('id') == 'lastchoice') {
			$(this).removeAttr('id');
			$('#choices').append(add);
			addChoice();
		}
	});
}

function checkInputs() {
	// check for empty question
	$('.form-group :input').change(function() {
		// check for at least one choice
		// $('#choices input').change(function() {
		// 	$('#submitpoll').removeClass('disabled');
		// });

		var q = $('.form-group input').val();
		var c = false;

		$('#choices :input').each(function() {
			if ($(this).val().length > 0) {
				c = true;
				return false;
			}
		});
		
		if (q.length && c) {
			$('#submitpoll').removeClass('disabled');
		}
		else {
			$('#submitpoll').addClass('disabled');
		}
	});
}

addChoice();
checkInputs();