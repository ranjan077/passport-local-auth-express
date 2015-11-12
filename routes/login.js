module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.redirect('/login');
	});

	app.get('/login', function(req, res) {
		res.render('login', { message: req.flash('loginMessage'), isThisLoginPage: true});
	});

	app.get('/signup',  function(req, res) {
		res.render('login', { message: req.flash('signupMessage'), isThisLoginPage: false});
	});

	app.get('/logout',  function(req, res) {
		req.logout();
		res.redirect('/login');
	});

	app.get('/home', isLoggedIn, function(req, res) {
		res.render('home');
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/home',
		failureRedirect : '/login',
		failureFlash : true
	}));

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/login',
		failureRedirect : '/signup',
		failureFlash : true
	}));

	function isLoggedIn(req, res, next) {


		if (req.isAuthenticated())
			return next();

		res.redirect('/');
	}

}