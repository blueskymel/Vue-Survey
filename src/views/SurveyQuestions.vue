<template>
  <div class="survey-question-wrap">
    
    <h1>{{survey.name}}</h1>

    <div v-for="(question, key) in survey.questions" class="survey-question-item" 
        v-bind:key="question.id">
      <h3>Question {{key+1}}</h3>
      <h5>{{question.title}}</h5>
      <h6>{{question.subTitle}}</h6>

      <div v-for="option in question.options" class="survey-question-option-item" 
          v-bind:key="option.id">
        <input type="checkbox" v-bind:key="option.id">
        <label for="checkbox">{{ option.text }}</label>      
      </div>
    </div>

    <div class="back-button-wrap">
      <router-link v-bind:to="'/Surveys'">
        <button>Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { surveys } from '../data';


export default {
  name: 'SurveyQuestions',
  data() {
    return {
      survey: surveys.find((s)=> s.id === this.$route.params.id), 
    };
  }
}
</script>

<style scoped>
.survey-question-wrap {
  width:90%;
  padding-left:5%;
}
.survey-question-item{
    border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
.survey-question-item h3,h5{
  margin: -1px 0px 2px 0px;
}
.survey-question-item h6{
  margin: -1px 0px 15px 0px;
}
.back-button-wrap {
  float:right;
}
</style>
