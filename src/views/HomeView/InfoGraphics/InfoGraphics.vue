<template>
  <v-row>
    <v-col>
      <v-row
        style="background-color: white; border: 1px solid rgba(0, 0, 0, 0.12)"
        class="mt-1 rounded-lg"
      >
        <v-col cols="3" class="py-2" style="height: 56px; min-width: 48px">
          <div class="module">MODULE 01</div>
          <div>
            <v-combobox
              append-icon="mdi-chevron-down"
              class="dropdown"
              v-model="select"
              :items="['Child development', 'Child developments']"
              dense
            ></v-combobox>
          </div>
        </v-col>
      </v-row>
      <v-row v-for="(i) in 1" :key="i">
        <v-col>
          <div class="module">UNIT 01</div>
          <div style="font-size: 14px; color: rgba(0, 0, 0, 0.87);">Understanding Early Adolescent Growth & Development</div>
          <div class="mt-6 d-flex row">
            <div class="pb-2 pr-2" v-for="(i) in 1" :key="i" style="width: 276px; backdrop-filter: blur(2px);">
                <module-card></module-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ModuleCard from './components/ModuleCard.vue';
export default {
  components: { ModuleCard },
  data() {
    return {
      select: "Child development",
    };
  },
};
</script>

<style>
.module {
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1px;
}
.dropdown.theme--light.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  border-width: 0px;
}
.dropdown.theme--light.v-text-field > .v-input__control > .v-input__slot:after {
  border-width: 0px;
}
</style>
