import Vue from 'nativescript-vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import routes from './router';
import store from './store';

import SideDrawer from './components/SideDrawer';
import DrawerContent from './components/DrawerContent';
import FontIcon from './components/FontIcon';

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

Vue.prototype.$routes = routes;

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: './assets/css/font-awesome.css',
  mdi: './assets/css/materialdesignicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
Vue.component('FontIcon', FontIcon);

new Vue({
  store,
  render(h) {
    return h(SideDrawer, [
      h(DrawerContent, { slot: 'drawerContent' }),
      h(routes.Home, { slot: 'mainContent' }),
    ]);
  },
}).$start();
