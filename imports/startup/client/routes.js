import { FlowRouter } from 'meteor/kadira:flow-router';

// layouts
import '../../ui/layouts/mainLayout';
// pages
import '../../ui/pages/home/home';
import '../../ui/pages/categories/addCategory';
import '../../ui/pages/categories/editCategory';
import '../../ui/pages/categories/categories';
// accounts
import '../../ui/accounts/register/register';
import '../../ui/accounts/login/login';

import { Categories } from '../../api/categories/categories';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Register' });
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
