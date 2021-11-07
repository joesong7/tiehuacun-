<template>
  <v-app>
     
    <appBar/>
    <br>
    <br>
    
    <router-view/>
    <br>
    <footerText/>
  </v-app>
</template>

<script>
import appBar from './components/AppBar.vue'
import footerText from './components/FooterText.vue'
export default {
  name: 'App',
  
  data: () => ({
    //
  }),
   
   components: {
      appBar,
      footerText
    },
};
</script>

