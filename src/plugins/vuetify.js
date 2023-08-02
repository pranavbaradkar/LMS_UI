import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary:'#000000',
        secondary:'#E0E0E0',
        background:'#faf8ee',
        surface: '#FAF8EE',
      },
    },
  },
});
