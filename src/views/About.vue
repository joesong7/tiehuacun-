<template>
  <div>
    <br />
    <br />
    <div>
      <v-btn depressed color="#B9846D">
        <v-text :class="$style.text">關於我們</v-text>
      </v-btn>
    </div>
    <br />

    <div :class="$style.img">
      <v-img
        src="https://tour.taitung.gov.tw/image/827/1024x768"
        width="287px"
      ></v-img>
    </div>
    <div :class="$style.song">
      <v-title :class="$style.songTitle">歌 </v-title>
      <br />
      <v-text :class="$style.songText">
        向地下泉水緩緩流著， 靜靜地滋養著土壤， 長出花草樹木；
        當涓流的歌聲聚成溪流， 匯入川河後， 差就不回頭地奔向海洋。</v-text
      >
    </div>
    <br >
 

    <!-- <div :class="$style.music">
      <v-title>音樂 </v-title>
      <br />
      <v-text>
        就是我們的海洋， 他連接了不同的島嶼和國度 讓人們在此相遇， 相知、別離、
        因而思念....
      </v-text>
      <div :class="$style.musicImg">
        <v-img
          src="https://tour.taitung.gov.tw/image/875/1024x768"
          width="260px"
        ></v-img>
      </div>
    </div> -->
    <br >
  

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
export default {};
</script>

<style module>
.text {
  font-size: 20px;
  color: white;
}
.img {
  position: absolute;
  left: -89px;
  filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.25));
}
.song {
  margin-left: 55%;
  width: 35%;
}
.songTitle {
  font-size: 18px;
  color: #43a0af;
}
.songText {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
}

.musicImg {
  position: absolute;
  right: -87px;

  filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.25));
}
.conText {
  width: 80%;
  position: absolute;
  top: 80%;
  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  left: 33px;
  letter-spacing: 0.05em;
}
.conImg {
  position: absolute;
  width: 323px;
  height: 199px;
  left: 19px;
  top: 90%;
  filter: drop-shadow(13px 13px 4px rgba(0, 0, 0, 0.25));
}
.conText2 {
  width: 80%;
  position: absolute;

  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  left: 33px;
  letter-spacing: 0.05em;
  top: 1000px;
}
.conImg2 {
  position: absolute;
  width: 323px;
  height: 199px;
  left: 19px;
  top: 1080px;
  filter: drop-shadow(13px 13px 4px rgba(0, 0, 0, 0.25));
}
.conText3{

  width: 80%;
  position: absolute;
   top: 1320px;
  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  left: 33px;
  letter-spacing: 0.05em;

}
.divider{
  

position: absolute;
width: 344px;
height: 0px;
left: 16px;
top: 1700px;

opacity: 0.2;
}

</style>