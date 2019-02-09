import Vue from 'nativescript-vue';

import Home from './components/Home';

new Vue({
  components: {
    Home,
  },

  template: `
        <Frame>
            <Home />
        </Frame>`,
}).$start();
