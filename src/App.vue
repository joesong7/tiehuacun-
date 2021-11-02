<template>
  <v-app>
  
    <AppBar/>
    
    <router-view/>
    <br>
    <Footer/>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  
  data: () => ({
    //
  }),
   
   components: {
      AppBar,
      Footer
    },
};
</script>

