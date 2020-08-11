$(document).ready(function() {

	setTimeout(function() {
		$('#load').hide()
	},1400)

	setTimeout(function() { 
		function getPassword() {
	    let chars = "0123456789abscefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()_+?><:{}[]";
	    let passwordLength = 16;
	    let password  = "";
	    for(let i = 0; i < passwordLength; i++ ) {
	        let randomNumber = Math.floor(Math.random() * chars.length );
	        password += chars.substring(randomNumber,randomNumber+1);
	    }
	    document.getElementById("password").value = password
		}
		getPassword() 
	}, 1500);

	
})
