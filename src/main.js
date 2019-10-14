import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '@/App.vue'
import { routes } from '@/routes';
import store from '@/store';
import msToMin from '@/filters/ms-to-min';
import EventBus from '@/plugins/EventBus';
import disabledPlay from '@/directives/disabled';

import 'material-design-icons/iconfont/material-icons.css';
import '@/styles.scss';

Vue.use(disabledPlay);
Vue.use(EventBus);
Vue.use(msToMin);
Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.config.productionTip = false;

//Replace helper
String.prototype.append = function (index, value) {
    return this.slice(0, index) + value + this.slice(index + 1);
};
  
const router = new VueRouter({ routes, mode: 'history' });

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
