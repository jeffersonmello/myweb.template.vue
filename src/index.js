import './assets/scss/main.scss';
import Vue from 'vue';
import AppComponent from './components/AppComponent.vue';

new Vue({
  el: '.vue-app',

  components: {
    'appComponent': AppComponent
  },
 });