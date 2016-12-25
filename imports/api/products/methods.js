import { Meteor } from 'meteor/meteor';

import { Products } from './products';

Meteor.methods({
	deleteProduct(productId) {
		Products.remove({_id: productId});
	}
});