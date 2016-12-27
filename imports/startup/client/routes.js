import { FlowRouter } from 'meteor/kadira:flow-router';

// layouts
import '../../ui/layouts/mainLayout';
// pages
import '../../ui/pages/home/home';
// categories
import '../../ui/pages/categories/addCategory';
import '../../ui/pages/categories/editCategory';
import '../../ui/pages/categories/categories';
// products
import '../../ui/pages/products/addProduct';
import '../../ui/pages/products/editProduct';
import '../../ui/pages/products/products';
// vendors
import '../../ui/pages/vendors/addVendor';
import '../../ui/pages/vendors/editVendor';
import '../../ui/pages/vendors/vendors';
// accounts
import '../../ui/accounts/register/register';
import '../../ui/accounts/login/login';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    if (Meteor.call('getUserCount') == 0) {
      BlazeLayout.render('MainLayout', { main: 'Register' });
    } else {
      BlazeLayout.render('MainLayout', { main: 'Home' });
    }
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Login' });
  }
});

FlowRouter.route('/category', {
  name: 'addCategory',
  action() {
    BlazeLayout.render('MainLayout', { main: 'AddCategory' });
  }
});

FlowRouter.route('/categories', {
  name: 'categories',
  action() {
  	Meteor.subscribe('categories');
    BlazeLayout.render('MainLayout', { main: 'Categories' });
  }
});

FlowRouter.route('/category/:_id', {
  name: 'editCategory',
  action(params, queryParams) {
  	Meteor.subscribe('oneCategory', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditCategory'});
  }
});

FlowRouter.route('/product', {
  name: 'addProduct',
  action() {
  	Meteor.subscribe('products');
    BlazeLayout.render('MainLayout', { main: 'AddProduct' });
  }
});

FlowRouter.route('/products', {
  name: 'products',
  action() {
  	Meteor.subscribe('products');
    BlazeLayout.render('MainLayout', { main: 'Products' });
  }
});

FlowRouter.route('/product/:_id', {
  name: 'editProduct',
  action(params, queryParams) {
  	Meteor.subscribe('oneProduct', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditProduct'});
  }
});

FlowRouter.route('/vendor', {
  name: 'addVendor',
  action() {
  	Meteor.subscribe('vendors');
    BlazeLayout.render('MainLayout', { main: 'AddVendor' });
  }
});

FlowRouter.route('/vendors', {
  name: 'vendors',
  action() {
  	Meteor.subscribe('vendors');
    BlazeLayout.render('MainLayout', { main: 'Vendors' });
  }
});

FlowRouter.route('/vendor/:_id', {
  name: 'editVendor',
  action(params, queryParams) {
  	Meteor.subscribe('oneVendor', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditVendor'});
  }
});
