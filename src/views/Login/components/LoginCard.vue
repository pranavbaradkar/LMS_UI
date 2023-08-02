<template>
    <v-card width="454" class="padding" height="auto" elevation="2">
                <div class="headline text-h5">
                    Get Started 
                </div>
                <div class="text-subtitle-1 subtitle wrap">
                    Welcome! Please enter your<br> credentials to continue your journey 
                </div>
                <keep-alive>
                    <v-text-field v-if="!isMob" style="margin-top: 24px;" label="Email-id" outlined ></v-text-field>
                    <mo-num-text-field v-else></mo-num-text-field>
                </keep-alive>
                <v-btn @click="handleSendOtp" class="sendOtp" color="#82D2DA" height="48" block rounded elevation="0" size="x-large">SEND OTP</v-btn>
                <v-btn @click="toggleLoginField" x-small class = "text-button" color="#005B64" block text>Log In Using {{ isMob ? 'Email id' : 'Mobile Number'}}</v-btn>
                <v-row class="mt-6 mx-0" justify="space-between">
                    <v-col align-self="center" class="pa-0" style="background-color: rgba(0, 0, 0, 0.12); height: 2px;" cols="5"></v-col>
                    <div>OR</div>
                    <v-col align-self="center" class="pa-0" style="background-color: rgba(0, 0, 0, 0.12); height: 2px;" cols="5"></v-col>
                </v-row>
                <v-btn x-large class = "text-button mt-8" height="18" block text>
                    <v-img class="mr-2" max-height="24" max-width="24" src="../../../assets/google.png"></v-img>
                    <div style="font-size: 16px;">SIGN IN WITH GOOGLE</div>
                </v-btn>
    </v-card>
</template>

<script>
import MoNumTextField from './MoNumTextField.vue'

export default {
  components: { MoNumTextField },
    name: 'Logincard',
    data () {
        return {
            isMob: false,
        }
    },
    methods: {
        toggleLoginField () {
            this.isMob = !this.isMob;
        },
        handleSendOtp () {
            this.$emit("onclickOtp");
        }
    },
}
</script>

<style>
.v-card.padding {
    padding: 24px 5% 24px 5%;
}
.headline {
    letter-spacing: 0.0125em;
}

.bg-color {
    background-color: #FAF8EE;
}
.v-input {
    height: 48px;
    border-radius: 12px;
}
.sendOtp{
    margin-top: 40px;
}
.sendOtp > .v-btn__content {
    color: #005B64;
}

.text-button {
    margin-top: 42px;
}
.text-button > .v-ripple__container {
  opacity: 0 !important;
}
.text-button:before {
  opacity: 0 !important;
}
</style>