<template>
  <div>
    <Title name="結帳" />
    <br />
    <div v-for="item in billData" :key="item">
      <v-card :class="$style.scard">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div></div>
          <div>
            <div :class="$style.snumber" >
              <v-btn x-small color="#43A0AF" width="80" height="30"><v-text>{{ item.number }}套票  x{{item.count}}</v-text></v-btn>
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
              <v-text> ${{item.price}}</v-text>
              <br />
            </div>  
             
          </v-card-actions>
          <br />
        </div>
      </v-card>
      
    </div>
    <br>

        <div>
      <v-card :class="$style.scard">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div/>
          <div  :class="$style.payImg">
           <img src="https://cdn2.ettoday.net/images/5490/d5490313.jpg" width="50px" height="50px" >
          
          </div>
          <div  :class="$style.payImg">
            <img src="https://fjctour.com/eweb_fjctours/images/icon/visa.png" width="50px" height="50px">
          </div>
          <div  :class="$style.payImg">
                <img src="http://nihontu-cn.com/wp/wp-content/uploads/ApplePayLogo.jpg" alt="" width="50px" height="50px">
          </div>
          <br />
        </div>
      </v-card>
       <br>
          <div :class="$style.shBtn">
      <v-btn width="300" elevation="3" color="#43A0AF" height="44px" ><v-text>確定付款</v-text>
      </v-btn>
    </div>
  
      
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
    this.billData = JSON.parse(localStorage.getItem("billData") || "[]");
    this.count = this.shppingData[0].count;
    this.price = this.shppingData[0].price;

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
.payImg{

width: 55px;
height: 55px;
background: rgba(221, 221, 221, 0.15);
box-sizing: border-box;
filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;

}
.payImg:hover{
    border: 3px solid #43A0AF;
}
</style>