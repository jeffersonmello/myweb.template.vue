import './assets/scss/main.scss';
import Vue from 'vue';
import store from '../store';
import AppComponent from './components/AppComponent.vue';


new Vue({
  el: '.vue-app',
  store,
  components: {
    'appComponent': AppComponent
  },
 });

