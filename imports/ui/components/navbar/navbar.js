import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './navbar.html';

Template.Navbar.helpers({
	currentUserEmail() {
		return Meteor.user().emails[0].address;
	}
});

Template.Navbar.events({
	'click .logout'(event) {
		event.preventDefault();

		Meteor.logout();

		FlowRouter.go('login');
	}
});