<template>
  <div>
   
 
    <Title  name="合作市集"/>
    <v-sheet min-width="300">
      <div class="d-flex flex-wrap">
        <v-btn outlined class="ma-2" color="#43A0AF" width="26%" height="30px;">
          動手做一下
        </v-btn>
        <v-btn outlined class="ma-2" color="#43A0AF" width="26%" height="30px;">
          小吃小喝一下
        </v-btn>
        <v-btn outlined class="ma-2" color="#43A0AF" width="26%" height="30px;">
          家裡想擺幅畫
        </v-btn>
      </div>
    </v-sheet>
     <Card/>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Title from "../components/Title.vue";
export default {
  components:{
    Title,
    Card
  },
  data() {
    return {
     
    };
  },
};
</script>

<style module>

</style>