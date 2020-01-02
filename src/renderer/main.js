// import the styles
import { ipcRenderer } from 'electron'
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
Vue.use( BootstrapVue )

import VueTheMask from 'vue-the-mask'
Vue.use( VueTheMask )

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( faUserSecret )


Vue.component( 'font-awesome-icon', FontAwesomeIcon )

const isDev = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

// tslint:disable-next-line: no-unused-expression
new Vue( {
  el: '#app',
  router,
  store,
  render: h => h( App ),
} )

// handle menu event updates from main script
ipcRenderer.on( 'change-view', ( event, data ) => {
  if ( data.route ) {
    router.push( data.route )
  }
} )
