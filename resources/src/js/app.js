// OFFICIAL POLICE GARAGE
//

import Vue from 'vue';
import router from './router';

import App from './App.vue';

// ---------------------------------------------------------
// OPG CONFIG: WINDOW INSTANCE
// ---------------------------------------------------------

window.OPG = {
  url: document.querySelector('html').getAttribute('data-url'),
  token: document.querySelector('html').getAttribute('data-token'),
  socket: document.querySelector('html').getAttribute('data-socket'),
};


// ---------------------------------------------------------
// INIT VUE W/ ROUTER, STORE & API DATA
// ---------------------------------------------------------

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App),
  created() {

    
  },
  methods: {

  }
});
