<template>
  <div>
     
    <Title name="關於我們" />
    <br />
    <div :class="$style.song">
    <div :class="$style.songImg">
      <v-img
        src="https://tour.taitung.gov.tw/image/827/1024x768"
        width="287px"
      ></v-img>
    </div>

      <v-title :class="$style.songTitle">歌 </v-title>
      
      <v-text :class="$style.songText">
        向地下泉水緩緩流著， 靜靜地滋養著土壤， 長出花草樹木；
        當涓流的歌聲聚成溪流， 匯入川河後， 差就不回頭地奔向海洋。</v-text
      >

    </div>
    <br > 


    <div :class="$style.music">
        <div :class="$style.musicImg">
        <v-img
          src="https://tour.taitung.gov.tw/image/875/1024x768"
          width="260px"
        ></v-img>
      </div>
     
     
      <v-text  :class="$style.musicText">
        就是我們的海洋， 他連接了不同的島嶼和國度 讓人們在此相遇， 相知、別離、
        因而思念....
      </v-text>
       <v-title :class="$style.musicTitle">音樂 </v-title>
    </div>
    
  
   <br>
    <div :class="$style.conText">
      <p>
        為了相遇和思念，我們學著去涉水澆灌，
        奮力把歌聲灑上半空，水珠漂向陽光中的樹梢和草地，
        落入月夜和交錯杯影間，它滋潤了來往的人們、旅人、歸人..
      </p>
    </div>
    <div :class="$style.conImg">
      <v-img
        src="https://tour.taitung.gov.tw/image/25854/640x480"
        width="323px"
      ></v-img>
    </div>
     <br>
    <div :class="$style.conText2">
      <v-text>
        多年前，我們是旅人也是歸人，聚在這裡升起了篝火，
        歌聲中開始踏土築夢，昨日的荒煙蔓草，今日的笙歌夜影，
        旅人或歸人，已是家人； 依舊，我們大聲唱著，有人先走開，也有人做了進來，
        薪火不斷，歌聲不停.....</v-text
      >
    </div>

    <div :class="$style.conImg2">
      <v-img
        src="https://i0.wp.com/biteamap.com/wp-content/uploads/flickr/15512980292_12939eff16_c.jpg?w=1080"
        width="323px"
      ></v-img>
    </div>
    <br>
    <div :class="$style.conText3">
      <v-text>
        溪流必湧向狀況的海洋，露水自然會滲回靜謐的地底，
        但我們的歌聲會飄向哪？落在哪？ 或者該這麼問...你該去哪裡？
        我想，它一定會在那裡等你！</v-text
      >
    </div>
    <div :class="$style.divider">
     <v-divider></v-divider>
    </div> 
  </div>
</template>

<script>
import Title from '../components/Title.vue'
export default {
    name:"About",
    components:{
        Title
    }
};
</script>

<style module>
.text {
  font-size: 14px;
  color: white;
}

.songImg {
  
 position: relative;
  margin-left: -84px;
  filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.25));
}

.songTitle {
  position: relative;
  margin-left: 30px;
  font-size: 18px;
  color: #43a0af;
}
.songText {

  margin-top: 30px;
  margin-right: 40px;
  width: 169px;
  line-height: 14px;
 letter-spacing: 0.05em;

  font-size: 12px;
 
}


.musicImg {

   
  position: relative;
  margin-right: -60px;
  filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.25));
}
.musicTitle{
  margin-left: 30px;
  width: 100px;
  font-size: 18px;
  color: #43a0af;
}
.musicText{
    margin-top: 30px;
    margin-right: 30px;
    width: 169px;
  line-height: 14px;
 letter-spacing: 0.05em;

  font-size: 12px;
}
.conText {
  width: 80%;

  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  margin-left: 6%;
  letter-spacing: 0.05em;
}
.conImg {

  width: 323px;
  margin-left: 6%;
  filter: drop-shadow(13px 13px 4px rgba(0, 0, 0, 0.25));
}
.conText2 {
 width: 80%;
  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  margin-left: 6%;
  letter-spacing: 0.05em;

}
.conImg2 {

  width: 323px;
  margin-left: 6%;
  filter: drop-shadow(13px 13px 4px rgba(0, 0, 0, 0.25));
}
.conText3{

  width: 80%;


  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
    margin-left: 6%;
  letter-spacing: 0.05em;

} 
.divider{
width: 344px;

opacity: 0.2;
}
@media (min-width: 768px) {

.song {

    margin-left: 20%;
}
.music{
    margin-left: 20%;
}
}
@media (max-width: 768px) {

.song {

  display: flex;
  flex-direction: row ;
}
.music{
  display: flex;
  flex-direction: row-reverse;
}
  
}

</style>