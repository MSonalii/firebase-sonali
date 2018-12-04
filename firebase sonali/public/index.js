(function(){
	// initialize firebase
	const config = {
		apiKey: "AIzaSyB2VUA6vgbVuzisLKutGOr9sX48Kfg3oxA",
    	authDomain: "agk-geo-tracker.firebaseapp.com",
    	databaseURL: "https://agk-geo-tracker.firebaseio.com",
    	projectId: "agk-geo-tracker",
    	storageBucket: "agk-geo-tracker.appspot.com",
    	messagingSenderId: "1048812624613"
	};
	firebase.initializeApp(config);

	const textEmail = document.getElementById('txtEmail');
	const textPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignup = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogOut');

	btnLogin.addEventListener('click', e =>{
		//get email and pass
		console.log('in login');
	});
}());