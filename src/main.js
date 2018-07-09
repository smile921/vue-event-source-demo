import Vue from 'vue'
import '@/assets/css/base.scss';
import '@/assets/img/icon-spring-boot-admin.svg';

import moment from 'moment';
import VueRouter from 'vue-router';
import components from './components';
import Notifications from './notifications';
import views from './views';
import Store from './store';
import sbaShell from './shell';
import ViewRegistry from './viewRegistry';

// import App from './App.vue'

moment.locale(window.navigator.language);
const applicationStore = new Store();
const viewRegistry = new ViewRegistry();

Notifications.install({applicationStore});
views.forEach((view)=>{
  view.install({
    viewRegistry,
    applicationStore
  })
});

Vue.use(VueRouter);
Vue.use(components);


new Vue({
  el: '#app',
  router: new VueRouter({
    linkActiveClass: 'is-active',
    routes: viewRegistry.routes
  }),
  render(h){
    return h(sbaShell,{
    props:{
      views: this.views,
      applications : this.applications,
      error: this.error      
      }
    });
  },
  data: {
    views: viewRegistry.views,
    applications: applicationStore.applications,
    error: null
  },
  methods: {
    onError(error){
      console.log('Connection to server failed:',error)
      this.error =  error;
    },
    onConnected(){
      this.error = null;
    }
  },
  created(){
    applicationStore.addEventListener('connected',this.onConnected);
    applicationStore.addEventListener('error',this.onError);
    // applicationStore.start();
  },
  beforeDestroy() {
    applicationStore.removeEventListener('connected', this.onConnected);
    applicationStore.removeEventListener('error',this.onError);
    // applicationStore.stop();
  },
});
