<template>
  <div>
    <Title name="選擇套票種類"/>
    <br />
    <div :class="$style.select">
      <v-select
        :items="items"
        dense
        solo
        v-model="select"
        label="請選擇日期"
      ></v-select>
    </div>

    <div v-for="item in packageData" :key="item.id">
      <v-card
        :to="{
          name: 'PackageContent',
          params: {
            data: {
              id: item.id,
              number: item.number,
              title1:item.title1,
              title2:item.title2,
              title3:item.title3,
              pCourse: item.pCourse,
            },
          },
        }"
      >
        <div
          class="d-flex flex-no-wrap justify-space-between"
          :class="$style.packageCard"
        >
          <div :class="$style.number">
            <v-card-title class="text-h3"> {{ item.number }}</v-card-title>
          </div>

          <div :class="$style.cenText">
            <v-title>{{ item.title1 }}</v-title>
            <br />
            <v-title>{{ item.title2 }}</v-title>
            <br />
            <v-title>{{ item.title3 }}</v-title>
          </div>
          <v-card-actions>
            <div :class="$style.riText">
              <v-text> {{ item.price }}</v-text>
            </div>
          </v-card-actions>
          <br />
        </div>
      </v-card>
      <br />
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  components:{
    Title
  },
 
  data() {
    return {
      items: [
        "2021年9月17日",
        "2021年9月18日",
        "2021年9月19日",
        "2021年9月20日",
      ],
      select: null,
      packageData: [
        {
          id: 1,
          number: "A",
          title1: "手作課程",
          title2: "文創商品折價卷50元",
          price: "890元起",
        },
        {
          id: 2,
          number: "B",
          title1: "表演票卷",
          title2: "飲料折價卷30元",
          title3: "餐飲折價卷100元",
          price: "300元起",
        },
        {
          id: 3,
          number: "C",
          title1: "手作課程",
          title2: "表演票卷",
          title3: "餐飲折價卷100元",
          price: "1050元起",
          pCourse: [{
            title: "手工香水體驗課程",
            detailed: {
              title: "香水款式",
              img: "https://cdn.shopify.com/s/files/1/0043/8753/7009/products/IMG_8841.jpg?v=1611613535",
              price: "800",
            },

            show: {
              date: "20:00 -22:00",
              title: "南王姐妹花",
              text: "樂器：吉他",
              img: "http://www.tiehua.com.tw/images/ckeditor/images/20180927140435.jpg",
              price: "300",
            },

            coupon: "100",
            price:"1100"
          },]
        },
      ],
    };
  },
};
</script>

<style module>
.select {
  margin-left: 3%;

  width: 60%;
  color: #6c6c6c;
}

.packageCard .number {
  background-color: #43a0af;
  color: white;
  font-weight: bold;
}

.packageCard v-title {
  color: #43a0af;
  font-weight: bold;
}
.packageCard v-text {
  color: #d03232;
  font-weight: bold;
}
@media (max-width: 768px) {
  .packageCard .riText {
    margin-top: 70%;
  }
  .packageCard .cenText {
    margin-top: 4%;
  }
}
</style>
