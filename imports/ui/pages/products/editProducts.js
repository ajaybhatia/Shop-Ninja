import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';
import { Products } from '../../../api/products/products';

import './editProduct.html';

Template.EditProduct.onCreated(function() {
	// const categoryId = FlowRouter.getParam('_id');
	// if (categoryId != undefined) {
	// 	Meteor.subscribe('oneCategory', categoryId);
	// }
});

Template.EditProduct.helpers({
	product() {
		return Products.findOne({_id: FlowRouter.getParam('_id')});
	},
	editProductId() {
		return FlowRouter.getParam('_id');//Meteor.uuid();
	},
	categoryOptions() {
		Meteor.subscribe('categories');
		return Categories.find().map(obj => {
			return {
				label: obj.name,
				value: obj._id
			}
		});
	}
});

AutoForm.addHooks(null, {
	onSuccess(formType, result){
		FlowRouter.redirect('/products');
	}
});