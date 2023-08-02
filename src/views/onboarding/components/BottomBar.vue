<template>
    <div class="continue d-flex justify-center">
        <div class="col-3 pt-10 pb-6">
            <v-btn @click="onClick" color="#82D2DA" height="48" block rounded elevation="0" size="x-large">Continue</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['onClickContinue'],

    methods: {
        onClick () {
            this.$emit('onClickContinue');
        }
    }
}
</script>

<style>
.continue {
    position: fixed;
    bottom: 0%;
    left: 0%;
    width: 100%;
    background-color: #FAF8EE;
   }
</style>