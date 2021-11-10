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
            <br>

            <div :class="$style.stitle">

            <v-title>{{ item.title1 }}</v-title>
            <br />
            <v-title>{{ item.title2 }}</v-title>
            <br />
            <v-title>{{ item.title3 }}</v-title>
            </div>
           
          
          </div>
          <v-card-actions>
            <div>
              <v-text> ${{ item.price }}</v-text>
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
      <v-btn width="200" elevation="3" color="#43a0af" v-on:click="shBtn"
        ><v-text>結帳</v-text>
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
      shppingData: [],
    
    };
  },
 
  
  mounted() {
    this.shppingData = JSON.parse(localStorage.getItem("shoppingData") || "[]");
    this.count = this.shppingData[0].count
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
  },
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

.shBtn {
  text-align: center;
}
.shBtn v-text {
  color: white;
}
</style>