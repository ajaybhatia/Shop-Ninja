import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Customers } from '../../api/customers/customers';

import './bill.html';
import '../../ui/components/billdetail/billdetail';

Template.Bill.onCreated(function() {
});

Template.Bill.helpers({
  customers() {
    return Customers.find({}, {sort:{firstName: 1, lastName: 1}}).fetch();
  }
});

Template.Bill.events({
  'change #name'(event) {
    const selectedCustomerId = event.target.value;
    const selectedCustomer = Customers.findOne({ _id: selectedCustomerId });
    let address =
      selectedCustomer.address + "\n" + selectedCustomer.city +
      " " + selectedCustomer.pincode + "\n" + selectedCustomer.state +
      "\n\n" + selectedCustomer.phoneNumber;
    $('#address').val(address);
  },
  'keyup .amount'(event, instance) {
    if (event.keyCode == 13) {
      let count = $('tbody td:first-child').length + 1;
      Blaze.renderWithData(Template.BillDetail, { index: count }, $('table tbody')[0]);
      $('.product:last').focus();
    }
  }
});
