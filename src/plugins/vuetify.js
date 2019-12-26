import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#000000', // #E53935
            secondary: '#000000', // #FFCDD2
            accent: '#000000', // #3F51B5
          },
        },
      },
});
