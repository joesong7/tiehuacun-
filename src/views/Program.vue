<template>
  <div>
    
    <Title name="表演節目"/>
    <br />
    <div :class="$style.program">
      <v-title>唱作聚家：</v-title>
      <br />
      <v-text>想展露你美妙的歌聲嗎，馬上來報名吧！ </v-text>
      <br />
      <v-text> 每週四晚上8點，現場報名，需自備樂器！</v-text>
      <br />
      <v-title>表演時間：</v-title>
      <p>每週四至週六 晚上8-10點</p>
      <p>每週日 晚上8-9:30點</p>
    </div>

    <v-divider></v-divider>
    <div :class="$style.weekRow">
      <div :class="$style.weekCol" v-for="item in week" :key="item">
       {{ item.number }}
      </div>
    </div>
     <ProgramList/>
  </div>
</template>

<script>
import ProgramList from "../components/ProgramList.vue";
import Title from "../components/Title.vue";
export default {
  components:{
     ProgramList,
     Title
     
  },
  data() {
    return {
      week: [
        {
          number: "星期四",
        },
        {
          number: "星期五",
        },
        {
          number: "星期六",
        },
        {
          number: "星期日",
        },
      ],
   
    };
  },
};
</script>

<style module>

.program {
  margin-left: 5%;
}
.program v-title {
  color: #43a0af;
  font-weight: bold;
}
.program p {
  color: #d03232;
  font-weight: bold;
}


.weekRow {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.4em;
}

.weekCol {
  color: #43a0af;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
}

</style>