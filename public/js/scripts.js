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

		var q = $('.form-group input').val();
		// var c = false;

		// $('#choices :input').each(function() {
		// 	if ($(this).val().length > 0) {
		// 		c = true;
		// 		return false;
		// 	}
		// });

		if (q.length) {
			$('#submitpoll').removeClass('disabled');
		}
		else {
			$('#submitpoll').addClass('disabled');
		}
	});
}

function checkVotes() {
	$('#voteform .input-group :input').change(function() {
		if ($("#voteform input:checkbox:checked").length > 0 || $("#voteform input:radio:checked").length > 0)
		{
			$('#submitvote').removeClass('disabled');
		}
		else
		{
			$('#submitvote').addClass('disabled');
		}
	});
}

// prevent submitting with enter before validation
$(document).ready(function() {
	$(window).keydown(function (event) {
		var dis = $('#submitpoll').hasClass("disabled");
		if((event.keyCode == 13) && dis) {
			event.preventDefault();
			return false;
	    }
	})
})

addChoice();
checkInputs();
checkVotes();