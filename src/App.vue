<template>
  <v-app>
     
    <appBar v-if="$route.path != '/'"/>
    <br>
    <br>
    
    <router-view/>
    <br>
    <footerText v-if="$route.path != '/'"/>
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

