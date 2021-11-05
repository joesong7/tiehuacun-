<template>
  <div>
    <br />
    <br />
    <div>
      <v-btn depressed color="#B9846D">
        <v-text :class="$style.text">合作市集</v-text>
      </v-btn>
    </div>

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
export default {
  components:{
    Card
  },
  data() {
    return {
     
    };
  },
};
</script>

<style module>
.text {
  font-size: 14px;
  color: white;
}

</style>