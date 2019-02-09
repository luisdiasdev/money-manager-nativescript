import Vue from 'nativescript-vue';

import DrawerContent from './components/DrawerContent';
import routes from './router';
import SideDrawer from './components/SideDrawer';
import store from './store';

import '~/plugins/fontIcon';

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

Vue.prototype.$routes = routes;

new Vue({
  store,
  render(h) {
    return h(SideDrawer, [
      h(DrawerContent, { slot: 'drawerContent' }),
      h(routes.Home, { slot: 'mainContent' }),
    ]);
  },
}).$start();
