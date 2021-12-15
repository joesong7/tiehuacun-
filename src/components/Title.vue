<template>
      <div>
      <v-btn depressed color="#B9846D">
        <v-text :class="$style.text">{{name}}</v-text>
      </v-btn>
    </div>
</template>

<script>
export default {
  name: "Title",
  props:{
     name:String
  }
}
</script>

<style module>
.text{
    color: white;;
}
</style>