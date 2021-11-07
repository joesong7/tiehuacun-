<template>
  <div v-if="carData">
    <div>
      <v-btn depressed color="#B9846D">
        <v-text :class="$style.text">選票套票種類票內容</v-text>
      </v-btn>
    </div>
    <br />
    <div :class="$style.select">
      <v-select dense solo :label="carData.title"></v-select>
    </div>
    <v-card class="mx-auto my-2" max-width="374" :class="$style.productCard">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="data.pCourse[0].detailed.img"></v-img>

      <v-divider class="mx-4"></v-divider>

      <v-text>詳細資訊</v-text>
      <v-select dense solo :label="data.pCourse[0].detailed.title"></v-select>

      <v-text>{{ detailedData.price }}</v-text>

      <v-card-actions> </v-card-actions>
    </v-card>

    <v-card class="mx-auto my-2" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="showData.img"></v-img>

      <v-divider class="mx-4"></v-divider>

      <v-text>{{ showData.date }}</v-text>
      <br />
      <v-text>{{ showData.title }}</v-text>
      <br />
      <v-text>{{ showData.text }}</v-text>

      <v-card-actions> </v-card-actions>
    </v-card>
    <br />

    <div>
      <v-card :class="$style.couponCard">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div :class="$style.number">
            <v-card-title> </v-card-title>
          </div>

          <div>
            <v-text :class="$style.couponTitle">餐飲折價卷</v-text>
          </div>

          <div>
            <v-text :class="$style.couponText">{{ carData.coupon }}</v-text>
          </div>

          <br />
        </div>
      </v-card>
      <br />
      <div :class="$style.contentPrice">
        <v-text> 原價＄{{ price }}</v-text>
        <br />
        <v-text :class="$style.couponText2">-折扣{{ carData.coupon }}</v-text>
        <br />
        <v-divider class="mx-6"></v-divider>
        <v-text>總付款金額</v-text>
        <v-text>$ {{ total }}</v-text>
      </div>
      <div>
      
      </div>
      
    </div>
  
  </div>
  <div v-else></div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      carData: this.data.pCourse[0],
      price: this.data.pCourse[0].price,
      detailedData: this.data.pCourse[0].detailed,
      showData: this.data.pCourse[0].show,
    };
  },
  computed: {
    total: function () {
      return this.price - this.carData.coupon;
    },
  },
};
</script>

<style module>
.text {
  color: #fff;
}
.select {
  margin-left: 3%;

  width: 60%;
  color: #6c6c6c;
}

.productCard v-select {
  width: 50%;
}
.couponCard {
  font-weight: bold;
  margin-left: 10%;
  width: 80%;
  height: 40px;
  text-align: center;
  font-size: 18px;
}

.couponTitle {
  font-weight: bold;
  color: #43a0af;
}
.couponText {
  font-weight: bold;
  color: #d03232;
}
.contentPrice v-text {
  margin-left: 60%;
  font-size: 18px;
  font-weight: bold;
}
.couponText2 {
  margin-left: 60%;
  font-size: 18px;
  font-weight: bold;
  color: #d03232;
}
</style>