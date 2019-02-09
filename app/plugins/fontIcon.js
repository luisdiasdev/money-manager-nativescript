import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
import Vue from 'nativescript-vue';

import FontIcon from '~/components/common/FontIcon';

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: './assets/css/font-awesome.css',
  mdi: './assets/css/materialdesignicons.css',
};

TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
Vue.component('FontIcon', FontIcon);
