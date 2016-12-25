import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './categories.html';
import '../../components/category/category';

// window.Categories = Categories;

Template.Categories.helpers({
	categories() {
		return Categories.find({}, {sort: {createdAt: -1}}).fetch();
	}
});