import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:blaze-layout';

import "./main.html"

FlowRouter.route('/game', {
	name: 'Game',
	action() {
		console.log("Game route");
		BlazeLayout.render("body", {main: "game"});
	}
});

FlowRouter.route('/', {
	name: 'Home',
	action() {
		console.log("Home route");
		BlazeLayout.render("body", {main: "home"});
	}
});

FlowRouter.notFound = {
	action() {
		console.log("404");
		BlazeLayout.render("body", {main: '404'});
	}
};
