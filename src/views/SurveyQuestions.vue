<template>
  <div class="survey-question-wrap">
    <SurveyQuestionsList :survey="survey" />
  </div>
</template>

<script>
import { surveys } from '../data';
import SurveyQuestionsList from '../components/SurveyQuestionsList.vue';

export default {
  name: 'SurveyQuestions',
  components: {
    SurveyQuestionsList,
  },
  data() {
    return {
      survey: surveys.find((s)=> s.id === this.$route.params.id), 
    };
  }
}
</script>

