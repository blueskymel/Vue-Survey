<template>
  <div class="survey-question-wrap">
    
    <h1>{{survey.name}}</h1>

    <SurveyQuestionsListItem v-for="(question,index) in survey.questions" 
    :key="question.id"
    :question="question"
    :index="index"
     />

    

    <div class="back-button-wrap">
      <router-link v-bind:to="'/Surveys'">
        <button>Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import SurveyQuestionsListItem from './SurveyQuestionsListItem.vue';


export default {
  name: 'SurveyQuestionsList',
  props: ['survey'],
  components: {
    SurveyQuestionsListItem,
  },
}
</script>

<style scoped>
.survey-question-wrap {
  width:90%;
  padding-left:5%;
}

.back-button-wrap {
  float:right;
}
</style>
