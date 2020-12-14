<template>
  <div class="survey-item">
    <router-link v-bind:to="'/SurveyQuestions/' + survey.id">
      <button class="survey-button">{{survey.name}}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SurveyListItem',
  props: ['survey'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.survey-item{
  margin-bottom:10px;
}

.survey-button{
  width:100%;
}
</style>
