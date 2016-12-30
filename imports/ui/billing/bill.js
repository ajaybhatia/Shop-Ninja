import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Customers } from '../../api/customers/customers';

import './bill.html';
import '../../ui/components/billdetail/billdetail';

Template.Bill.onCreated(function() {
  this.index = new ReactiveVar(2);
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
      Blaze.renderWithData(Template.BillDetail, { index: instance.index.get() }, $('table tbody')[0]);
      instance.index.set(instance.index.get() + 1);
      $('.product:last').focus();
    }
  }
});
