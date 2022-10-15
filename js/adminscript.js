const userMananger=localStorage.getItem("user");
let userJson;
if(userMananger){
	userJson = JSON.parse(userMananger)
}
$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/childrens",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#childrens").text(data.length);
    },
    error: function(data){
       // alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/users",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#parents").text(data.length);
    },
    error: function(data){
       // alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/schools",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#schools").text(data.length);
    },
    error: function(data){
      //  alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/symptoms",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#symptoms").text(data.length);
    },
    error: function(data){
       // alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/school/city/Pietermaritzburg",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#Pertermaridzburg").text(data.length);
    },
    error: function(data){
       // alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/school/city/Pietermaritzburg",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
      
        data.forEach(function (v) {var name ="<p class=\"durbanSchool\"><b>"+ v.name+"</b><br>"; var postalCode = "<span class=\"schooItem\">"+v.postalCode+"</span>"; 
        var street ="<span class=\"schooItem\">Street: "+ v.street+"</span>";
            var phone ="<span class=\"schooItem\"> Phone: "+  v.phone+"</span>"; var email = "<span class=\"schooItem\"> Email: "+ v.email+"</span></p>";
            var link ="<span class=\"schooItem\"> URL "+  v.link+"</span>"; 
        $("#pietermaritzburgSchool").append(name+street+link+phone+email);
        });
    },
    error: function(data){
       // alert("fail");
    }
});

$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/school/city/Durban",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
        $("#Durban").text(data.length);
    },
    error: function(data){
        //alert("fail");
    }
});
$.ajax({
    type: "GET",
	headers: {
		'Authorization':"Bearer "+ userJson.token,
  'Content-Type': 'application/json'
	},
    url: "http://localhost:5001/api/content/school/city/Durban",
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function(data) {
       
        data.forEach(function (v) {var name ="<p class=\"durbanSchool\"><b>"+ v.name+"</b><br>"; var postalCode = "<span class=\"schooItem\">"+v.postalCode+"</span>"; 
        var street ="<span class=\"schooItem\">Street: "+ v.street+"</span>";
            var phone ="<span class=\"schooItem\"> Phone: "+  v.phone+"</span>"; var email = "<span class=\"schooItem\"> Email: "+ v.email+"</span></p>";
            var link ="<span class=\"schooItem\"> URL "+  v.link+"</span>"; 
        $("#durbanSchool").append(name+street+link+phone+email);
        });
    },
    error: function(data){
        //alert("fail");
    }
});