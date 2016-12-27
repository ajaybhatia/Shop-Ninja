import { Meteor } from 'meteor/meteor';

import { Vendors } from './vendors';

Meteor.methods({
	deleteCategory(vendorId) {
		Vendors.remove({_id: vendorId});
	}
});
