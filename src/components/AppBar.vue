<template>
  <div>
    <div>
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        height="60%"
        border-color="#43A0AF"
      >
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="50"
        />
        <v-toolbar-title :class="$style.appbarText"
          >鐵花村音樂聚落</v-toolbar-title
        >

        <v-spacer></v-spacer>
   
      
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          v-on:click="userTrue"
          color="#43A0AF"
        ></v-app-bar-nav-icon>
      </v-app-bar>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#1D9BAF"
      :class="$style.navigation"
    >
      <div :class="$style.user" v-if="userData != null">
        <v-avatar size="60">
          <img :src="userData[0].img" />
        </v-avatar>
        <br />
        {{ userData[0].username }}
       
       <br>
          <v-btn
        class="ma-2"
        color="orange darken-2"
        dark
        to="/ShippingCar"
      >
     
       <v-icon color="while darken-2"  >  mdi-cart </v-icon>
      </v-btn>
            
      </div>
       
        

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item :class="$style.list" to="/">
            <v-list-item-title :class="$style.listText">
              回首頁</v-list-item-title
            >
          </v-list-item>

          <v-list-item :class="$style.list" to="/about">
            <v-list-item-title :class="$style.listText"
              >關於我們</v-list-item-title
            >
          </v-list-item>

          <v-list-item :class="$style.list" to="/program">
            <v-list-item-title :class="$style.listText"
              >表演節目</v-list-item-title
            >
          </v-list-item>

          <v-list-item :class="$style.list" to="/bazaar">
            <v-list-item-title :class="$style.listText"
              >合作市集</v-list-item-title
            >
          </v-list-item>
          <v-list-item :class="$style.list" to="/package">
            <v-list-item-title :class="$style.listText"
              >購買套票</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div :class="$style.user">
        <v-btn depressed color="secondary" v-on:click="logOut"> 登出 </v-btn>
      </div>
    </v-navigation-drawer>
    <br />
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
      userData: null,
    };
  },

  methods: {
    logOut() {
      localStorage.removeItem("userData");

      this.$router.push("/");
    },
    userTrue() {
      this.userData = JSON.parse(localStorage.getItem("userData"));
    },
  },
};
</script>

<style module>
.appbarText {
  color: #43a0af;
}

.list {
  text-align: center;
  background: #b5b3b3;
}
.listText {
  font-size: 30px;
  color: white;
}
.navigation {
  width: 400px;
}
.user {
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>