<template>
  <v-app>
    <v-container fluid align-center fill-height class="pa-0">
        <v-row justify="center" style="height: 100%" wrap>
   <v-col xs="12" sm="12" md="6" lg="6" justify="center" fill-height class="pa-0">
    <carousel :colors="colors"></carousel>
    </v-col>
        <v-col xs="12" sm="12" md="6" lg="6" class="bg-color align-center justify-center row">
            <keep-alive>
                <login-card @onclickOtp="sendOtp" :is="selected"></login-card>
                <otp-card :is="selected"></otp-card>
            </keep-alive>
        </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Carousel from './components/Carousel.vue'
import LoginCard from './components/LoginCard.vue'
import OtpCard from './components/OtpCard.vue'

export default {
  components: { Carousel, LoginCard, OtpCard },
    name: "Login",
    data () {
        return {
            colors: [
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      tabs: ["LoginCard", "OtpCard"],
      selected: 'LoginCard',
    }
    },
    methods: {
        sendOtp() {
            this.selected = "OtpCard";
        }
    }
}
</script>

<style>

</style>