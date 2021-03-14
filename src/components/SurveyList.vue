<template>
  <div class="survey-item-wrap">
    <h1>Vue Surveys</h1>
    <SurveyListItem v-for="survey in surveys" 
    :key="survey.id"
    :survey="survey" />
    
  </div>
</template>

<script>
import SurveyListItem from './SurveyListItem.vue';

export default {
  name: 'SurveyList',
  props: ['surveys'],
  components: {
    SurveyListItem,
  },
}
</script>

<style scoped>
.survey-item-wrap {
  width:90%;
  padding-left:5%;
}

</style>
