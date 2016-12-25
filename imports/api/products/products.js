import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Categories } from '../categories/categories';

export const Products = new Mongo.Collection('products');

Products.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

Products.attachSchema(new SimpleSchema({
	name : {
		type: String,
		label: 'Name',
		autoform: {
			placeholder: 'Product Name'
		}
	},
	description: {
		type: String,
		label: 'Description',
		optional: true,
		max: 1000,
		autoform: {
			placeholder: 'Product Description (not more than 100 characters)',
			rows: 5
		}
	},
	costPrice: {
		type: Number,
		decimal: true,
		label: 'Cost Price',
		min: 0.0,
		autoform: {
		}
	},
	salePrice: {
		type: Number,
		decimal: true,
		label: 'Sale Price',
		min: 0.0,
		autoform: {
		}
	},
	category: {
		type: String,
		label: 'Category'
	},
	author: {
		type: String,
		label: 'Author',
		autoValue() {
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue() {
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
}));