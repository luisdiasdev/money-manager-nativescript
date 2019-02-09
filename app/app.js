import Vue from 'nativescript-vue';
import routes from './router';
import store from './store';

import SideDrawer from './components/SideDrawer';
import DrawerContent from './components/DrawerContent';

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
