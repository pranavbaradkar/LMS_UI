<template>
  <v-app class="fill-height" style="background-color:  #faf8ee;">
    <router-view></router-view>
  </v-app>
</template>

<script>
import { authentication } from './router/constants';



export default {
  name: 'App',

  components: {
  },

  data: () => ({
    authentication: authentication.login,
  }),
};
</script>

<style>
   @import url('https://fonts.cdnfonts.com/css/graphik');

   /* .v-application {
    font-family: 'Graphik', sans-serif !important;
  } */
</style>
