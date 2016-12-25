import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Products } from '../../../api/products/products';
import { Categories } from '../../../api/categories/categories';

import './addProduct.html';

window.Products = Products;

Template.AddProduct.helpers({
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