<template>   
      <v-navigation-drawer
      app
      color="#82D2DA"
    v-model="drawer"
    :mini-variant="mini"
    permanent
    class="ma-4"
    style="border-radius: 15px;"
    height="95%"
    mini-variant-width="72"
    width="230">
        <v-list-item class="px-2">
          <v-list-item-avatar @click.stop="mini = !mini">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="mx-3 mt-2">
          <v-list-item-avatar @click.stop="mini = !mini" class="d-flex justify-center ma-0">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-title class="ml-2">John Leider</v-list-item-title>
        </v-list-item>
  
        <v-list class="pt-0">
          <v-list-item
            class="mx-3"
            v-for="(item, index) in items"
            :key="item.title"
            link
            @click="onItemClicked(index)"
            :class="{active : item.active}"
          >
            <v-list-item-icon class="rounded d-flex justify-center ma-0" style="height: 48px; width: 48px;">
              <v-icon medium color="#005B64">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-outline', active: false },
          { title: 'My Account', icon: 'mdi-account', active: false },
          { title: 'Users', icon: 'mdi-account-group-outline', active: false},
        ],
        mini: true,
      }
    },
    methods: {
        onItemClicked (i) {
            this.items.map((item,index) => {
                if (index === i) {
                    item.active = true;
                }
                else {
                    item.active = false;
                }
            })
        }
    }
  }
</script>

<style>

.v-list-item--link:before {
    background-color: rgba(255, 255, 255, 0.38) !important;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: none;
    border-radius: 12px;
}
.active { 
    background-color: rgba(255, 255, 255, 0.38); 
    border-radius: 14px;
}

.v-btn--absolute.v-btn--left{
    right: -20px;
    z-index: 7 !important;
}

.v-input {
    border-radius: 24px;
    min-height: 36px;
}
.theme--light.v-text-field--filled>.v-input__control>.v-input__slot {
    background: rgba(130, 210, 218, 0.12);
}
.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover {
    background: rgba(130, 210, 218, 0.12);
}
</style>