<template>
  <div>
    <Title name="購物車" />
    <br />
    <div v-for="item in shppingData" :key="item">
      <v-card :class="$style.scard">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div></div>
          <div>
            <div :class="$style.snumber" >
              <v-btn x-small color="#43A0AF" width="60" height="30"><v-text>{{ item.number }}套票</v-text></v-btn>
            </div>
         

            <div :class="$style.stitle">

            <v-title>{{ item.title1 }}</v-title>
            <br />
            <v-title>{{ item.title2 }}</v-title>
            <br />
            <v-title>{{ item.title3 }}</v-title>
            </div>
           
          
          </div>
          <v-card-actions :class="$style.saction">
            <div :class="$style.sprice">
              <v-text> {{total}}</v-text>
              <br />
              <div>
                <v-btn v-on:click="addCount" x-small>
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                 {{ count }}
                <v-btn v-on:click="deCount" x-small>
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-actions>
          <br />
        </div>
      </v-card>
      
    </div>
    <br>
    <div :class="$style.shBtn">
      <v-btn width="300"  height="44px" elevation="3" color="#43a0af" v-on:click="shBtn"><v-text>結帳</v-text>
      </v-btn>
    </div>
  
  </div>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },
  data() {
    return {
      count:0,
      price:0,
      shppingData: [],
      billData: [],
    };
  },
 
  
  mounted() {
    this.shppingData = JSON.parse(localStorage.getItem("shoppingData") || "[]");
    this.count = this.shppingData[0].count;
    this.price = this.shppingData[0].price;

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
    shBtn(){
        this.billData.push({
        number: this.shppingData[0].number,
        title1: this.shppingData[0].title1,
        title2: this.shppingData[0].title2,
        title3: this.shppingData[0].title3,
        price: this.total,
        count: this.count,
      });
      localStorage.setItem('billData', JSON.stringify(this.billData));
        this.$router.push("/check");
      
      
    }
  },
computed:{
     
    total: function () {
      return 1100*this.count-100;
    },

}  
};
</script>

<style module>
.scard{
  background: rgba(221, 221, 221, 0.15);
}

.snumber  v-text{
  color:white ;
  font-size: 16px;
}
.stitle{
  font-size: 16px;
  color: #43A0AF;
  font-weight: bold;
}
.saction{
  padding-top: 50px;
}
.sprice v-text{
  color: rgba(208, 50, 50, 0.74);
  font-weight: bold;
  padding-left: 25px;
}


.shBtn {
  text-align: center;
}
.shBtn v-text {
  color: white;
}
</style>