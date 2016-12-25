import { FlowRouter } from 'meteor/kadira:flow-router';

// layouts
import '../../ui/layouts/mainLayout';
// pages
import '../../ui/pages/home/home';
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
    BlazeLayout.render('MainLayout', { main: 'Register' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Login' });
  }
});


