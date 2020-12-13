<template>
  <div class="survey-wrap">
    
    <h1>Compass Surveys</h1>
    <div v-for="survey in surveys" class="survey-item" v-bind:key="survey.id">
      <router-link v-bind:to="'/SurveyQuestions/' + survey.id">
        <button class="survey-button">{{survey.name}}</button>
      </router-link>
    </div>
  </div>
</template>

<script>

import { surveys } from '../data';

export default {
  name: 'Surveys',
  data() {
    return {
      surveys, 
    };
  }
}
</script>

<style scoped>
.survey-wrap {
  width:90%;
  padding-left:5%;
}

.survey-item{
  margin-bottom:10px;
}

.survey-button{
  width:100%;
}
</style>
