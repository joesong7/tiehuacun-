<template>
  <div>
    <br />
    <br />
    <div>
      <v-btn depressed color="#B9846D" width="50%">
        <v-text>{{ aData.title }}</v-text>
      </v-btn>
    </div>
    <br />
    <div :class="$style.bazaar">
      <v-img :src="aData.articleImg"></v-img>
         <br />
      <v-text>{{ aData.text }}</v-text>
    </div>
 
  
    <br />
    <v-divider></v-divider>
    <br />
    <div :class="$style.article">
      <v-title>詳細資訊：</v-title>
      <br />
      <v-text>課程大綱：</v-text>
      <br />
      {{ aData.outline }}
      <br />
      <v-text>課程流程：</v-text>
      <div v-for="item in aData.process" :key="item">
        {{ item.time }}
      </div>
      <br />
      <v-text>價格：</v-text>
      <br />
       {{ aData.cashTitle }}
      <div v-for="item in aData.cash" :key="item">
        {{ item.money }}
      </div>
      <br />
      <v-text> 近期課程日期： </v-text>
      <br />
      <div v-for="item in aData.date" :key="item">
        {{ item.time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      aData: this.data,
    };
  },
};
</script>

<style module>
.bazaar v-img{
  left: 10;
   max-width: 20%;
}
.bazaar v-text{
  margin-left:4% ;
  width: 311px;
  height: 108px;
  font-size: 14px;
  line-height: 19px;
letter-spacing: 0.05em;
font-family: Roboto;
}
.article {
  margin-left: 2%;
}
.article v-title {
  color: #43a0af;
  font-size: 18px;
  font-weight:bold;
}
.article v-text{
    color: #C72323;
    font-weight:bold;
}
</style>