
$('#loginForm').submit(function(e){
	e.preventDefault();
	//Read the username
	var username;
	var password;
	password=$("#inputPassword").val();
	username=$("#inputUsername").val()
	// Stop the form
	var sendingData = {
		Username: username,
		Password: password
	 }

	 var json = JSON.stringify(sendingData);

$.ajax({  
		type: "POST",  
		url: "http://localhost:5001/api/account/login",
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'

		},
		crossDomain: true,
		data: json,    
		success: function (data, textStatus, xhr) {
			window.location.assign("http://localhost/view/admin_home.html")
			console.log(data);
			console.log(xhr.status);
			localStorage.setItem('user', JSON.stringify(data));
		}, 
		failure: function(response) {  
			console.log(response.d); 
		} 
		,
    complete: function(xhr, textStatus) {
        console.log(xhr.status);
		if(xhr.status==401 || xhr.status==500){
			$("#error").html("Invalid Login Credentials");
			//$("#error").toggleClass(".error");
		}
    } 
 
	}); /*
	 $.post('http://localhost:5001/api/account/login', json, function(response){ 
      alert("success");
     // $("#mypar").html(response.amount);
});/*
	$.ajax({
		url: 'http://localhost:5001/api/account/login',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': 'http://localhost/view'
		},
		type: "POST", /* or type:"GET" or type:"PUT" 
		dataType: 'jsonp',
		data: {
			sendingData
		},
		success: function (result) {
			console.log(result);
		},
		error: function () {
			console.log("error");
		}
	});*/
	

});