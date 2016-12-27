import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Vendors } from '../../../api/vendors/vendors';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './vendors.html';
import '../../components/vendor/vendor';

Template.Vendors.helpers({
	vendors() {
		return Vendors.find({}, {sort: {createdAt: -1}}).fetch();
	}
});