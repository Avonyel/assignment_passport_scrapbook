const express = require("express");
const router = express.Router();

function authenticate(passport) {
	router.get("/facebook", passport.authenticate("facebook"));

	router.get(
		"/facebook/callback",
		passport.authenticate("facebook", {
			successRedirect: "/",
			failureRedirect: "/login"
		})
	);

	return router;
}

module.exports = authenticate