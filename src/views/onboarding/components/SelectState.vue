<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="10">
        <v-text-field
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          outlined
          class="text-field-style"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      class="d-flex justify-center mx-16"
      style="overflow-y: scroll; max-height: 320px"
    >
      <v-col cols="12" class="py-0">
        <v-list dense class="rounded-lg py-0">
          <v-list-item-group>
            <v-list-item
              style="height: 48px"
              v-for="(item, index) in states"
              :key="index"
              @click="onClick"
            >
              <v-row>
                <v-col class="px-0">
                  <v-row>
                    <v-col>
                      <v-list-item-content class="my-1 mx-2">
                        {{ item }}
                      </v-list-item-content>
                    </v-col>
                  </v-row>
                  <v-row class="pa-0 ma-0 mx-n1">
                    <v-col class="pa-0 ma-0">
                      <v-col
                        class="py-0 my-0"
                        align-self="center"
                        style="
                          background-color: rgba(0, 0, 0, 0.12);
                          height: 1px;
                        "
                      ></v-col>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  emits: ["goToNext"],
  data() {
    return {
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  methods: {
    onClick() {
      this.$emit("goToNext");
    },
  },
};
</script>

<style>
.text-field-style {
  background-color: white;
  height: 56px;
}
</style>
