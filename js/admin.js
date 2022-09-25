var user = JSON.parse(localStorage.getItem('user'));
if(user==null){
	window.location.assign("http://localhost/view/")
}
function logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  $("#logout").click(function(){
    logout();
    window.location.assign("http://localhost/view/")
  })