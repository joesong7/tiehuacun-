<template>
  <div>
    <v-img max-height="100%" max-width="100%" src="../assets/home.png"> </v-img>
    <br />
    <div :class="$style.text">
      <v-text>
        為了相遇和思念，我們學著去涉水澆灌，奮力把歌聲灑上半空，水珠漂向陽光中的樹梢和草地，落入月夜和交錯杯影間，它滋潤了來往的人們、旅人、歸人...
      </v-text>
    </div>
    <br />
    <div :class="$style.new">
      <v-btn depressed color="#43A0AF">
        <v-text :class="$style.newText">最新消息</v-text>
      </v-btn>
      <br />
    </div>

    <br />
    <v-divider></v-divider>
    <br />
    <div>
      <v-row v-if="nine">
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-row v-if="twenty">
        <v-col v-for="n in 20" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
      <v-btn
        class="ma-2"
        outlined
        color="#8F8F8F"
        v-on:click="frTure"
        v-if="nine"
      >
        查看更多
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="#8F8F8F"
        v-on:click="niTure"
        v-if="twenty"
      >
        返回
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import jwtDecode from "jwt-decode";

export default {
  name: "Home",
  data() {
    return {
      query: {},
      tokenResult: {},
      idTokenDecode: {},
      nine: true,
      twenty: false,
      shppingData:[],
      userData:[],
      icon: [
        {
          web: "https://cdn-icons.flaticon.com/png/512/2504/premium/2504922.png?token=exp=1635606954~hmac=23fc3b1fa8dec9866faabe7cfd36fd70",
        },
        { web: "https://cdn-icons-png.flaticon.com/128/1384/1384053.png" },
      ],
    };
  },

  
  mounted() {
    this.query = this.$route.query; // 接網址的參數

    let options = Qs.stringify({
      // POST的參數  用Qs是要轉成form-urlencoded 因為LINE不吃JSON格式
      grant_type: "authorization_code",
      code: this.query.code,
      redirect_uri: process.env.VUE_APP_LINE_REDIRECT_URL,
      client_id: process.env.VUE_APP_LINE_CHANELL_ID,
      client_secret: process.env.VUE_APP_LINE_CHANELL_SECRET,
    });

    axios
      .post("https://api.line.me/oauth2/v2.1/token", options, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        this.tokenResult = res.data; // 回傳的結果

        this.idTokenDecode = jwtDecode(res.data.id_token); // 把結果的id_token做解析
        
        this.userData.push({username:this.idTokenDecode.name,img:this.idTokenDecode.picture})
        localStorage.setItem("userData",JSON.stringify(this.userData));
            
           

      
          
      
      });
      if(localStorage.getItem("name") ==null){
           
         this.$router.push("/receive");
      }

      this.shppingData =JSON.parse(localStorage.getItem("shoppingData") || '[]');
      this.user =JSON.parse(localStorage.getItem("shoppingData") || '[]');
     

   
      
  },
  methods: {
    frTure() {
      this.twenty = true;

      if (this.twenty) {
        this.nine = false;
      }
    },
    niTure() {
      this.nine = true;

      if (this.nine) {
        this.twenty = false;
      }
    },
  },
};
</script>

<style module>
.text {
  letter-spacing: 0.05em;
  width: 80%;

  font-size: 12px;
  margin-left: 10%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.newText {
  color: white;
}
</style>
