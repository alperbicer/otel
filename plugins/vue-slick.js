import Vue from 'vue'
import VueSlick from 'vue-slick'
const VSlick = {
  install(Vue, options) {
    Vue.component('v-slick', VueSlick)
  }
};
Vue.use(VSlick);
export default VSlick;