import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Products } from '../../../api/products/products';

import './billdetail.html';

Template.BillDetail.helpers({
  products() {
    return Products.find({}).fetch();
  }
});

Template.BillDetail.events({
  'change .product'(event) {
    const selectedProductId = event.target.value;
    if (selectedProductId) {
      const product = Products.findOne({ _id: selectedProductId });
      const salePrice = product.salePrice;
      const quantity = product.quantity;
      const discount = $(event.target).parent().parent().find('.discount').val();
      const amount = (salePrice - discount) * quantity;

      $(event.target).parent().parent().find('.unitprice').val(salePrice);
      $(event.target).parent().parent().find('.quantity').val(quantity);
      $(event.target).parent().parent().find('.amount').val(amount);
    } else {
      $(event.target).parent().parent().find('.unitprice').val('');
      $(event.target).parent().parent().find('.quantity').val('');
      $(event.target).parent().parent().find('.amount').val('');
    }
  }
});
