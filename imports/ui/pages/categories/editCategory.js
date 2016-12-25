import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';

import './editCategory.html';

Template.EditCategory.onCreated(function() {
	// const categoryId = FlowRouter.getParam('_id');
	// if (categoryId != undefined) {
	// 	Meteor.subscribe('oneCategory', categoryId);
	// }
});

Template.EditCategory.helpers({
	category() {
		return Categories.findOne({_id: FlowRouter.getParam('_id')});
	},
	editCategoryId() {
		return FlowRouter.getParam('_id');//Meteor.uuid();
	}
});

AutoForm.addHooks(null, {
	onSuccess(formType, result){
		FlowRouter.redirect('/categories');
	}
});