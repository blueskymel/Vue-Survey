<template>
  <div class="survey-wrap">
    <SurveyList :surveys="surveys" />
  </div>
</template>

<script>

import { surveys } from '../data';
import SurveyList from '../components/SurveyList.vue';

export default {
  name: 'Surveys',
  components: {
    SurveyList,
  },
  data() {
    return {
      surveys, 
    };
  }
}
</script>


