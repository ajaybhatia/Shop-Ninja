import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './bill.html';
import '../../ui/components/billdetail/billdetail';

Template.Bill.onCreated(function() {
  this.index = new ReactiveVar(2);
});

Template.Bill.events({
  'keyup .amount'(event, instance) {
    if (event.keyCode == 13) {
      Blaze.renderWithData(Template.BillDetail, { index: instance.index.get() }, $('table tbody')[0]);
      instance.index.set(instance.index.get() + 1);
      $('.product:last').focus();
    }
  }
});
