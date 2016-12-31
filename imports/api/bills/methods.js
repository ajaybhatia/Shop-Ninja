import { Bills } from './bills';

Meteor.methods({
  addBill(billNo, customerId, productsBought, totalDiscount, totalAmount, authorId) {
    return Bills.insert({
      billNo,
      customerId,
      productsBought,
      totalDiscount,
      totalAmount,
      authorId,
      createdAt: new Date()
    });
  }
});
