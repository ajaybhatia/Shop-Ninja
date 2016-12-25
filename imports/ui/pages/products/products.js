import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Products } from '../../../api/products/products';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './products.html';
import '../../components/product/product';

Template.Products.helpers({
	products() {
		return Products.find({}, {sort: {createdAt: -1}}).fetch();
	}
});