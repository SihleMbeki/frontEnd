
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
			if(data.role=="public"){
				window.location.assign("http://localhost/view/view_home.html");
			}
			 if(data.role=="admin"){
			window.location.assign("http://localhost/view/admin_home.html");
		}
		
			console.log(data);
			console.log(xhr.status);
			localStorage.setItem('user', JSON.stringify(data));
		}, 
		failure: function(response) {  
			console.log(response.d); 
		},
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
	var user = JSON.parse(localStorage.getItem('user'));
	if(user!=null){
  if(user.role=="public"){
	  window.location.assign("http://localhost/view/view_home.html");
  }else if(user.role=="admin"){
	window.location.assign("http://localhost/view/admin_home.html")
  }
  }

});


$('#registerForm').submit(function(e){
	e.preventDefault();
	//Read the username
	var username;
	var password;
	var password2;
	var email;
	
	password=$("#inputPassword").val();
	password2=$("#inputPasswordC").val();
	if(password!=password2){
		$("#error").text("Password does not match");
		return false;
	}
	email=$("#inputEmail").val();
	username=$("#inputUsername").val()
	// Stop the form
	var sendingData = {
		Username: username,
		Email: email,
		Password: password
	 }

	 var json = JSON.stringify(sendingData);

$.ajax({  
	type: "POST",  
		url: "http://localhost:5001/api/account/register",
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'

		},
		crossDomain: true,
		data: json,    
		success: function (data, textStatus, xhr) {
			if(data.role=="public"){
				window.location.assign("http://localhost/view/RegisterLogin.html");
			}
			 if(data.role=="admin"){
			window.location.assign("http://localhost/view/admin_home.html");
		}
		
			console.log(data);
			console.log(xhr.status);
			localStorage.setItem('user', JSON.stringify(data));
			window.location.assign("http://localhost/view/RegisterLogin.html");
		}, 
		failure: function(response) {  
			$("#error").text("Username taken");
			console.log(response.d); 
		},
    complete: function(xhr, textStatus) {
        console.log(xhr.status);
		console.log(xhr);
		if(xhr.status==401 || xhr.status==500){
			$("#error").html("Invalid Login Credentials");
			//$("#error").toggleClass(".error");
		}else{
		//	window.location.assign("http://localhost/view/RegisterLogin.html");
		}
		$("#error").text(textStatus);
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
