<template>
  <v-card width="auto" class="padding" height="auto" elevation="2">
                <v-icon @click="() => {}" color="black" class="ml-n4 pointer" >mdi-arrow-left</v-icon>
                <div class="headline text-h5" style="font-weight: 500;">
                    Verify your email
                </div>
                <div class="text-subtitle-1 subtitle wrap mt-4">
                    Enter 6 digit code sent on your email address
                </div>
                <v-otp-input  type="number" class="mt-8 px-2" length="6"></v-otp-input>
                <v-row justify="end" class="mt-4 mx-1">
                    <div>
                        00:59
                    </div>
                </v-row>
                <v-btn disabled x-small class = "text-button mt-7" color="#005B64" block text>RESEND OTP</v-btn>
                <v-btn class="mt-10" color="#82D2DA" height="48" block rounded elevation="0" size="x-large">Verify</v-btn>
    </v-card>
</template>

<script>
export default {
    name: 'Otpcard'
}
</script>

<style>
.v-card.padding {
    padding: 24px 5% 24px 5%;
    margin: auto 20% auto 20%;
}
.headline {
    letter-spacing: 0.0125em;
}

.bg-color {
    background-color: #FAF8EE;
}
.v-otp-input > .v-input{
    border-radius: 4px;
}
</style>