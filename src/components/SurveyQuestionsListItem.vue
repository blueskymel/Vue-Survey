<template>
    <div class="survey-question-item">
      <h3>Question {{index+1}}</h3>
      <h5>{{question.title}}</h5>
      <h6>{{question.subTitle}}</h6>

      <div v-for="option in question.options" class="survey-question-option-item" 
          v-bind:key="option.id">
        <input type="checkbox" v-bind:key="option.id">
        <label for="checkbox">{{ option.text }}</label>      
      </div>
    </div>
</template>

<script>

export default {
  name: 'SurveyQuestionsListItem',
  props: ['question','index'],
  
}
</script>

<style scoped>

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

</style>
