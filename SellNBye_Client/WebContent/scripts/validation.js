$(function(){
	
	$("#fname_error_msg").hide();
	$("#lname_error_msg").hide();
	$("#username_error_msg").hide();
	$("#password_error_msg").hide();
	$("#email_error_msg").hide();
	$("#phone_error_msg").hide();
	
	var error_fname = false;
	var error_lname = false;
	var error_username = false;
	var error_password = false;
	var error_email = false;
	var error_phone = false;

	$("#addUser_fname").focusout(function(){
		check_fname();
	});
	
	$("#addUser_lname").focusout(function(){
		check_lname();
	});
	
	$("#addUser_username").focusout(function(){
		check_username();
	});
	
	$("#addUser_password").focusout(function(){
		check_password();
	});
	
	$("#addUser_email").focusout(function(){
		check_email();
	});
	
	$("#addUser_phone").focusout(function(){
		check_phone();
	});
	

	function check_fname() {

		var fLen = $("#addUser_fname").val().length;
		if (fLen === 0) {
			$("#fname_error_msg").html("  Shouldn't be empty");
			$("#fname_error_msg").show();
			error_fname = true;
		} else {
			$("#fname_error_msg").hide();
		}
	}

	function check_lname() {

		var lLen = $("#addUser_lname").val().length;
		if (lLen === 0) {
			$("#lname_error_msg").html("  Shouldn't be empty");
			$("#lname_error_msg").show();
			error_lname = true;
		} else {
			$("#lname_error_msg").hide();
		}
	}
	
	function check_username(){
		
		var unLen = $("#addUser_username").val().length;
		if(unLen < 5 || unLen > 20){
			$("#username_error_msg").html("  Should have 5-20 Characters");
			$("#username_error_msg").show();
			error_username = true;	
		}else{
			$("#username_error_msg").hide();
		}			
	}

	function check_password() {

		var pwLen = $("#addUser_password").val().length;
		if (pwLen < 8) {
			$("#password_error_msg").html("  Should be at least 8 Characters");
			$("#password_error_msg").show();
			error_password = true;
		} else {
			$("#password_error_msg").hide();
		}
	}
	
	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i);
		if (pattern.test($("#addUser_email").val())) {
			$("#email_error_msg").hide();
		} else {
			$("#email_error_msg").html("  Invalid Email Address.");
			$("#email_error_msg").show();
			error_email = true;
		}
	}
	
	function check_phone() {

		var pat = new RegExp(/[^0-9]/);
		if (pat.test($("#addUser_phone").val())) {
			$("#phone_error_msg").hide();
		} else {
			$("#phone_error_msg").html("  Invalid Phone Number.");
			$("#phone_error_msg").show();
			error_phone = true;
		}
	}
	
});