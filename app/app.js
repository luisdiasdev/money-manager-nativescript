import RadListView from 'nativescript-ui-listview/vue';
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

Vue.registerElement(
  'FloatingActionButton',
  () => require('nativescript-floatingactionbutton').Fab
);

Vue.registerElement(
  'DropDown',
  () => require('nativescript-drop-down').DropDown
);

Vue.use(RadListView);

Vue.prototype.$routes = routes;

new Vue({
  store,
  render(h) {
    return h(SideDrawer, [
      h(DrawerContent, { slot: 'drawerContent' }),
      h(routes.HomePage, { slot: 'mainContent' }),
    ]);
  },
}).$start();
