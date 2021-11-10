<template>
  <div v-if="carData">
    <Title name="選擇套票種類內容" />
    <br />
    <div :class="$style.select">
      <v-select dense solo :label="carData.title"></v-select>
    </div>
    <v-card class="mx-auto my-2" max-width="300" :class="$style.productCard">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="data.pCourse[0].detailed.img"></v-img>

      <div
        class="d-flex flex-no-wrap justify-space-between"
        :class="$style.productNews"
      >
        <v-text>詳細資訊</v-text>
        <v-text>{{ detailedData.title }}</v-text>
        <!-- <v-select dense solo :label="data.pCourse[0].detailed.title"></v-select> -->

        <v-text>{{ detailedData.price }} 元</v-text>
      </div>
    </v-card>
    <br />

    <v-card class="mx-auto my-2" max-width="300">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="showData.img"></v-img>

      <v-divider class="mx-4"></v-divider>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div :class="$style.showText">
          {{ showData.date }}
          <br />
          <v-text>{{ showData.title }}</v-text>
          <br />
          <v-text>{{ showData.text }}</v-text>
        </div>
        <div :class="$style.showPrice">
          <v-text>票價</v-text>
          <br />
          <v-text>{{ showData.price }}</v-text>
        </div>
      </div>
    </v-card>
    <br />

    <div>
      <v-card :class="$style.couponCard">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div></div>
          <div>
            <v-icon color="#43a0af"> mdi-food-fork-drink </v-icon>
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
        <v-text> 原價＄{{ newPrice }}</v-text>
        <br />
        <v-text :class="$style.couponText2">-折扣{{ carData.coupon }}</v-text>
        <br />
        <v-divider class="mx-6"></v-divider>
        <v-text>總付款金額 </v-text>
        <v-text v-if="count >= 1">$ {{ total }}</v-text>
      </div>
    </div>
    <div :class="$style.add">
      <v-btn class="mx-1" v-on:click="addCount">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
      {{ count }}
      <v-btn class="mx-1" v-on:click="deCount">
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
    </div>
    <br />
    <div :class="$style.shBtn">
      <v-btn width="200" elevation="3" color="#43a0af" v-on:click="shBtn"
        ><v-text>加入購物車</v-text>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },
  props: {
    data: Array,
  },
  data() {
    return {
      carData: this.data.pCourse[0],
      price: this.data.pCourse[0].price,
      detailedData: this.data.pCourse[0].detailed,
      showData: this.data.pCourse[0].show,
      count: 1,
      shoppingData: [],
    };
  },
  computed: {
    newPrice: function () {
      {
        return this.price * this.count;
      }
    },
    total: function () {
      return this.newPrice - this.carData.coupon;
    },
  },
  mounted() {
    if (this.carData == null) {
      this.$router.push("/package");
    }
  },
  methods: {
    addCount() {
      if (this.count < 10) {
        this.count = this.count + 1;
      }
    },
    deCount() {
      if (this.count == 1) {
        this.count + 1;
      } else {
        this.count = this.count - 1;
      }
    },
    shBtn() {
      this.shoppingData.push({
        id: uuidv4(),
        number: this.data.number,
        title1: this.data.title1,
        title2: this.data.title2,
        title3: this.data.title3,
        price: this.total,
        count: this.count,
      });
      localStorage.setItem(`shoppingData`, JSON.stringify(this.shoppingData));
      this.$router.push("/shippingcar");
    },
  },
};
</script>

<style module>
.select {
  margin-left: 3%;

  width: 60%;
  color: #6c6c6c;
}

.productCard v-select {
  width: 50%;
}
.productNews v-text {
  color: #6c6c6c;
  font-size: 18px;

  font-weight: bold;
}
.showText v-text {
  color: #43a0af;
  font-size: 15px;
  font-weight: bold;
}
.showPrice v-text {
  color: #d03232;
  padding-right: 1px;
  position: relative;

  font-size: 18px;
  font-weight: bold;
}
.couponCard {
  font-weight: bold;
  margin-left: 10%;
  width: 80%;
  height: 40px;
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
  margin-left: 55%;
  font-size: 18px;
  font-weight: bold;
  color: #d03232;
}
.add {
  margin-left: 30%;
}
.shBtn {
  text-align: center;
}
.shBtn v-text {
  color: white;
}
</style>