import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Vendors } from '../../../api/vendors/vendors';

import './editVendor.html';

Template.EditVendor.onCreated(function() {
});

Template.EditVendor.helpers({
	vendor() {
		return Vendors.findOne({_id: FlowRouter.getParam('_id')});
	},
	editVendorId() {
		return FlowRouter.getParam('_id');//Meteor.uuid();
	}
});

AutoForm.addHooks(null, {
	onSuccess(formType, result){
		FlowRouter.redirect('/vendors');
	}
});
