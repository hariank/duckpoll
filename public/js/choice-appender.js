var add = '<div id = "lastchoice"> <input type="text" name="choicearr" placeholder="Choice" class="form-control"> </div>';

function addChoice() {
	$('#lastchoice').one('click keypress', function() {
		$(this).removeAttr('id');
		$('#choices').append(add);
		addChoice();
	});
}

addChoice();