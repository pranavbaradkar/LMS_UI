<template>
  <v-container class="justify-space-between">
    <v-row>
    <v-col>
        <v-row>
        <v-col class="ml-11">
            <v-chip medium v-for="(filter,index) in filters" 
            @click="onChipClick(index)"
            outlined
            :key="filter.name" 
            style="border: 0.5px solid rgba(0, 0, 0, 0.38) !important;"
            :class="{selectedBg: filter.selected}"
            class="ma-2 px-4 py-4" 
            color="black">
                {{ filter.name }}
            </v-chip>
        </v-col>
        </v-row>
        <v-row class="d-flex justify-center" style="overflow-y: scroll; max-height: 320px;">
        <v-col v-for="(subject,index) in subjects" :key="index" class="cols c-card mr-4 ml-4 mb-3 mt-3 pa-0 px-3">
            <v-checkbox class="mt-2 mb-0"></v-checkbox>
            <v-row class="justify-center" align-content="center">
                <v-col class="cols text-lg-center">
                    <div class="mb-4">{{ subject.icon }}</div>
                    <div class="mb-6">{{ subject.name }}</div>
                </v-col>
            </v-row>
        </v-col>
        </v-row>
    </v-col>
    </v-row>
    <bottom-bar @onClickContinue="onClick"></bottom-bar>
  </v-container>
</template>

<script>
import BottomBar from './BottomBar.vue'
export default {
  components: { BottomBar },
  emits: ['goToNext'],
    data() {
        return {
            subjects: [
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
                {
                    id: 1,
                    name: "english language",
                    icon: 'icon',
                },
            ],
            filters: [
                {
                    name: 'All',
                    selected: false,
                },
                {
                    name: 'Languages',
                    selected: false,
                },
                {
                    name: 'Science & Maths',
                    selected: true,
                },
                {
                    name: 'Social Studies',
                    selected: false,
                },
                {
                    name: 'Commerce',
                    selected: false,
                },
            ]
        }
    },
    methods: {
        onClick () {
            this.$emit('goToNext');
        },
        onChipClick(index) {
            this.filters[index].selected = !this.filters[index].selected;
        }
    },
}
</script>

<style>
   .c-card {
    background-color: white;
    max-width: 180px;
    min-width: 180px;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
   }
   .v-chip.v-chip--outlined.v-chip.v-chip.selectedBg {
    background-color:rgba(130, 210, 218, 0.34) !important
   }
   .v-chip.v-chip--outlined.v-chip.v-chip {
    background-color: white !important;
    }
    
</style>