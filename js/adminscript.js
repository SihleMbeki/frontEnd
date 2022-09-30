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
    url: "http://localhost:5001/api/content/school/city/test",
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