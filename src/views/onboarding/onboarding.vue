<template>
  <v-app class="surface">
    <v-container style="padding-top: 110px;"  class="d-flex justify-center">
      <v-row class="d-flex justify-center align-center col-12" style="transform: translateX(-24px);">
        <v-col @click="goToPrev" cols="1" class="d-flex justify-end pa-0 pr-8 pointer">
          <v-icon color="primary">mdi-close</v-icon>
        </v-col>
        <v-col cols="11" class="d-flex align-center">
          <progress-bar :percentageComplete="percentageComplete" @goToPrev="goToPrev"></progress-bar>
        </v-col>
      </v-row>
    </v-container>
      <form-field :h1="formDatas[onTheIndex].h1" :h2="formDatas[onTheIndex].h2">
      <keep-alive>
      <component :is="formDatas[onTheIndex].slot" @goToNext="goToNext"></component>
      </keep-alive>
      </form-field>
  </v-app>
</template>

<script>
import FormField from './components/FormField.vue'
import Levels from './components/Levels.vue'
import Boards from './components/Boards.vue'
import progressBar from './components/progressBar.vue'
import SelectState from './components/SelectState.vue'
import Subjects from './components/Subjects.vue'
import AnalysisGraph from './components/AnalysisGraph.vue'
import StartFrom from './components/StartFrom.vue'
import Recommendation from './components/Recommendation.vue'

export default {
  components: { progressBar, FormField, Levels, Boards, SelectState, Subjects, StartFrom,Recommendation, AnalysisGraph},
    name: "Onboarding",
    data () {
        return {
          formDatas: [
            {
              id: 1,
              h1: 'What level do you (want to) teach?',
              h2: 'Select one or more options as applicable',
              slot: Levels,
            },
            {
              id: 2,
              h1: 'Which board do you want to teach?',
              h2: "",
              slot: Boards,
            },
            {
              id: 3,
              h1: 'What is the state of your SSC board?',
              h2: "",
              slot: SelectState,
            },
            {
              id: 4,
              h1: 'Which Subject(s) do you teach?',
              h2: "Select maximum 3 subjects",
              slot: Subjects,
            },
            {
              id: 5,
              h1: 'Your Learning Needs',
              h2: "The spider graph gives a comprehensive analysis about what an ideal path should be",
              slot: AnalysisGraph,
            },
            {
              id: 6,
              h1: 'Where would you like to start from?',
              h2: "",
              slot: StartFrom,
            },
            {
              id: 7,
              h1: 'Recommended For You',
              h2: "Programmes & Courses in English Literature & English Language to cover your learning needs from the scratch.",
              slot: Recommendation,
            },
          ],
          onTheIndex: 0,
        }
    },
    methods: {
      goToNext () {
        this.onTheIndex = this.onTheIndex + 1;
      },
      goToPrev () {
        if (this.onTheIndex < 1) return;
        this.onTheIndex = this.onTheIndex - 1;
      }
    },
    computed: {
      percentageComplete () {
        return  (this.onTheIndex / this.formDatas.length) * 100;
      }
    },
}
</script>

<style>

</style>