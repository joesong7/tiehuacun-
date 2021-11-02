<template>
  <div>
    <br />
    <br />
    <div>
      <v-btn depressed color="#B9846D">
        <v-text :class="$style.text">合作市集</v-text>
      </v-btn>
    </div>

    <v-sheet min-width="300">
      <div class="d-flex flex-wrap">
        <v-btn outlined class="ma-2" color="#43A0AF" width="25%" height="30px;">
          動手做一下
        </v-btn>
        <v-btn outlined class="ma-2" color="#43A0AF" width="25%" height="30px;">
          小吃小喝一下
        </v-btn>
        <v-btn outlined class="ma-2" color="#43A0AF" width="25%" height="30px;">
          家裡想擺幅畫
        </v-btn>
      </div>
    </v-sheet>
    <v-card :class="$style.card">
      <div
        class="d-flex flex-no-wrap justify-space-between"
        v-for="item in cardData"
        :key="item"
      >
        <div :class="$style.cardImg">
          <img :src="item.img" width="100px" height="119px" alt="" />
        </div>
        <div>
          <div :class="$style.cardTitle">
            <v-card-title class="text-h7">
              {{ item.title }}
            </v-card-title>
          </div>
          <div :class="$style.cardText">
            <v-text>
              {{ item.text }}
            </v-text>
          </div>

          <v-card-actions>
            <div :class="$style.cardButton">
              <v-btn
                class="ml-3 mt-5"
                rounded
                :to="{
                  name: 'Article',
                  params: {
                    data: {
                      id: item.id,
                      title:item.title,
                      text:item.text,
                      articleImg: item.articleImg,
                      outline: item.outline,   
                      process:item.process,
                      cashTitle:item.cashTitle,
                      cash:item.cash,
                      date:item.date
                    }
                  }                
         
   
                  
                }"
              >
                <v-text :class="$style.cardButtonText"> 查看更多</v-text>
              </v-btn>
            </div>
          </v-card-actions>
          <br />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          id: 1,
          title: "金將陶",
          text: "深深敬畏自然也同時植入金將的喜感，大口呼吸東海岸半農半陶的簡單生活。目前金將陶的實體地點為鐵花村假日市集, 有時會在各大音樂祭與市集活動現蹤",
          img: "data:image/jpeg;base64,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",

          articleImg:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGRocHBkaHBwaHxoaHBgaGhgaIR4eJC4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHzQhISE0NDQ0NDQ0NDQxMTE0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ0NP/AABEIAKkBKwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADsQAAEDAgMFBQcDAwQDAQAAAAEAAhEDIQQxQQUSUWGBcZGhsfAGEyIyUsHRQuHxFBUzI3KCkmKywqL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEBAQADAAMBAQAAAAAAAAABEQISITEDQVFhcf/aAAwDAQACEQMRAD8AqGtRGtXGtRAFyul7dsso8blXsd91rYWa25TipPFVxfeJ6+NEy4lSDUvs6pvMaeSaCm+lObi6FIhchIEtr096k7ldZB63GJZLHDkViaguVv8AivpHYa80xdeXlsgWq8m5Wj9n/aEU2bjqbnQZBaVnqYlp5JnYrJeQOCi3Icm1tKPtexpn3L+8Lh9s2F3+J8zOY4KqfSgE8lUVX3Nh3qeetVfxxsMP7a0gb03zEaItX2vouIJZUHRYuhxgK0/pzCL1gn45SvtXtNmIe1zA4ANj4hF5WdcFbY+lvfCAd4EzwhIjCucQALq5fWosylgjV2wYCi6mQ7dIgzkjVh8Z7UaJD+Fwu+zf3miMwTBsOC9h8URmTHekW1ANFH3ojVTkv6bbn7OMxLySBF0JlOScrJdruRU2h30lGSF5a69gvfsS7simWg/SUVmB3hnBTlLqahsqzweF1odmVCHucMiD43VNhsK5hJPCJHNWmz6m7Y6kI69xE9HK/wATt7kj0aYayXTfRdY3U6Ewihod8U2lZXr9NJEgS0jdtr4L1THvIu4f8QEhial7XHBAoP3ntBMCQLcNVC5P60uBNTcc4xBiN43hCpvc106a9isjTBu0yLCOzJEq4UbgjjcDNRYeuhjy3fY8lpz16Hgh7juI7h+Erhq7qbuAOYhN/wBybwKNheNZOmZR2qvwGJaWNJIyCbGKZ9QVWVIzgqT2gpS0O4FWrsdT+tI4/FU3sLQZOifMsulfgWwKssLeBVw1ZrZVX3bjImdArpm0T+mm89D+E+ubvoS+j4YVL3SVZiqxyoP7iiNGJOVEjtIH3S8KPKJvYsTjmbr3DmVthgsUf0MHa5qp9tbBqNaajiydQHgnuV8TxvtPVljLFeXXtgwuLdA2GdBPMJzYX+ToUnhWy5WWz2blS40N1HXyq5+xZ4mqQY0SlUA6DuRq9QT0QmvbqspGtN7Jwoe9rBEkxMZcT3Lf4PC06UBrG83uu48Ty6LFbBrhtUFokw6BE6Fa1m0Q+245pzh7S2ew6oR07tvZ1Cpcsbv/AFgQ7rxHIrAbQxRpvc0U2tLbEjlqtltLarWODQ3eecgDGms2aOqxu2cO91QuO7LwDDSXARIz42WkyzL8R42qFz3OeHOzJCI8gvM2urXB4KbEH4eSRx+z3B+8LgnLUJyw/Gxa4fZTXtDmnP7KR2THBLYPEuZSdBixjkqo7RqH9SJNO3Ggbss8QF4YQgXc1Z041/1FROJf9RTxPk0LsIPqCiMM36gs7713Er2848UYPJqcMWNkOfbnCH/VNkQdbLOMpuJFirTC4V28XbvZCV9HPbQ1KoY0uN/yVUU8aRPA5pXE1nwGkGyU94RoVGLlxavrSLKWDfFRpPFVLMWRouuxpOTUvFXlG9w9Ui4OS0eHxAcAYGXisPsTf93vvJDT8ttOatKWNeAQzdAIs4gkLKTKd9xe4rChwJA6Krk6o+DrucCX3Pcvbw+kIslE6s9PnWy8VhmM/wBVj3Pk/KYEaap47Xwg+XDOP+55/KosCxpcQ7grAU2D6V0dZKykthg7epj5cMzrdcPtC/8ATRpjsaoNdTGoRWYumP4U7P4fj/qDvaDEabjexoU/7njHZOcOwAKsx5D37zMu5WmG2oGtALSSBxTt9eoU5R97jHfrf/2hROHxJze7/uU1/dCcmjqVA7SdwaO9LafiANl1nZvPVxSuPwLqcEumU/8A3B+hHcvF/vHMFQyzeEhsAxN76Ilv7HizzzeSoL6rWqF7BRbQ/wBKIjd+ECP0mPGyxm09i+5eQ5hLT8roMEdvFXO4nxqm2eBvgEwDqr3EUKYdDnTYcpCrf6ZueSLTw28c+plF6ipzVjRZhQb5dpTD8ZhWj4WSexVrcEBmQitwzRmp2Dxq52btKkXwxu46DumNeCewmOrOduOdvNaCXEwb8eXRZ2i9rXBwixlXFb/GXtLi43lgmw+Vu6LxrOSm/T8cVm0axFRxcAWP+G2YbqGyLGdUw3arj8rG7oADZ0AsFS7zifi4mRfr2pqi+REQE6JNPHH1ODB0SVZr3ukuaDcyLKYJDgNwmdZTTDDt0tbByJ8iltXkJUsGC3d3plTp7CYNCVdYfDi+8xo7DKnRw7g43G7pAghT5U/GKR+yWj9E9y8dljRgHctEMG55hoLuy/8ACdpbHa2BUDg45QQAOpzPJE6tK5GJq7JGo7ihs2a2btPUrVYrCMY8hp3vWXCUq/Cg5hPysHjL7U+GwzATDDHFO0wAJkxyTTcKRlCIKJjgpvWnIrKrGEy4EjjMjvS1bZY0urV+EbmDB4i09o1QYc35ojiJjrwRL/DxQ18CGpZtAStU6gHC5z1EeaQxNBlMhznH/rKqdFeYdwpNRpDjAEBuUAAQrFtINZuyTa+5fyWQfUD3ANmJzNrLR4ABloNsyCb5Jdeh9P4WqQ2fiv8AVM9gH3XHPcf1AeK7icVTdbeMSJPLUcgn6dejAyPcphV8q3EVlEqTWS62in7ghb3pnOUCyF7d5qRpleY3iEaeIggaqbX8lLdHBFYAUtOQuakaL3vv/EJl1EcpURh+SNgyoMqu+lFh2gAXtw9iZbhzxS08GwO0arMnkdht1C3eA2sKjGh0ZfFYQbcOC+fBpCsdnYl7bNaTyF/3SKxpdqey9Oq3eokU38p3TyIm3TxWJx+z6tFwa8EE6zId2EWK2OD2u/eDHN3J0ynmd5amjWZuwQDxyhOVG2PkAY6bSmaWGJz8V9Nq7Lwz7ljWni34f/WEM+z2GGcnkXeildVOowdDZm84NaLnqm9qYDcaGjNo7JzJzW3fRp0m/AwMHE69uZVXiqIqmGm5k5Zcc8tEh5awGGY9zwAIE666J3GYR7D8Q9dq2WG2NTYRN3ZzwVk/DsdZwB5EA+aovLHzBlNxOTpHOVasouLdwtz81txsShO9uAdjnDwBR2Mps+RjRzkT3m5SsPzjN7G2NiPlew7uj3EC3Aj5vBaDD4KnSEuhx4nLoMgkdoe0Ladt6XatgGPFU1XaNSrO40uJzJkNaPsl4+yvVq7x23WMs0CdQLHloqbFbWq1gW/42zd0je3eAGh5qWEwW7d3xP4nIdn5UcThGSYFzwlLq4vnmUBjYjdAgeuqI97gLCTwRKFJoEAQvFplZ61wqysciwgqbXjmjOnJAqUjqUaeCOZNwFEtjMKDW3zIUi46wRxRpYG5jT8p3TyFu5R2ngmOYC0T/wCR1OsDQJfHYiBaJVxs4b9Fhm8CxEjsTiemUbhdwF2pMD7lXWz8S4MtDuRE+KdxGALhMBp5xunsOi9gMKxk7z23tG8CFfuovUhGrhH1PlazpK5/ZanED/kfwrWgA13wPYRw3gmvdO+od4/KWUef8fOqTALAKL8XFoXHOQy0agq5P6d/x5teTkjb/LuQtyMlJkDNP0SYbvad6NRo3uFEO1CmypFybpHEm04NgmKdKc0LZ+Ec8/AHOJ5eoC1WzvZ5oh9Uk8GNy6lLBepPrNtolxDWyTwF1bYfYT3D4ju+J7h+VqRRY2zGho+loieuvVTZhnOyEDgqkZXu/pVYbYtJkFwLyPqy7hZWLGNb8gA6AI7sK4ZrxbGYT1F2/S9SgxwhzQR2eR0Ve/Zjgf8ATe4cGknM9n4Vw+4gDxXjTGluw/dK+xLYqGVMSzNhNrRHelae2ajSZkaQbR+60gzv4ySuljXWeJHMDySxWs67bD3fSTzzQK+1HtsAWk5utJk5RkrXbWzGBm+xsOBGWRBtlposlj6hiL9unRJcyrZu3y2xG8dSRI7tTKLS9oSTdsNHWTrZUZdLZFvV09sPB+8f8Qlrbu0ngOqorzFo7bD3zuMeWjgDftjJQe3E1bBu4OLiZ/PgtXReAIDQ1oFmgQB0XXltjAPRCdZPDez7QQ57i88J3R+Vde4aGw1scAMlYODXWsEq+m79Jn8fdVqb7LCn2eSnUw7SLtB5wPMIZYdbLzXFvFH0vgT8IDYGDpwSj8O9huJHEXCs31GniFw13NbEAjjGSm/j5q+fy9T/AFUvIhLmoQYlWz3tOYA5gJSpgGkktM8olZ38djbn80v0lUvpCG95GQXXiDnHVccTxnks2yr2rVGWqa2U91Cm51QOEkEDkYzOQsh4+mwtkmLwDE34ckm+i8UgXP3g6d0X+Udq15mxl31JfZraWKLnnfd8P6Rpu/pgITMQwcT0SDMa9rQxwDmDKRdvYdOzJFY5zhLHA8v1Dp+FrLP25uub9ntYMxDOBHRH9+ziq1lV4zU/6l3AJ/WSiD5RmrlGlyRarB0UV2QA5o9FmpyUGNHNMUKRJAaJJyCAK2nJse5aHZWwGvg1LDhqfwEbYuyGshz7v7w3sGp5q6i5AM80Yjrv+CimxgDWAADgoh3QKBYQoEmeKbMw1/C3PVd33fUUuy6b3WxkQeMpBNld2S4+tOd0u+vBt+ZXm1AUgYaZUy0IAqcFxtYA8SjTwyG66LrXiUBteTaSSrKlhPqz5IJX4wb7CM8ojtWcxtGDBHr7aLY1qegGmYnyWfx5l27vDhGVyUq05Z87Mc5sx6zsrD2cd7p72PBG9u7pItImQeZnwVrh6IJAOQVs3ZzXDIR5pwWgtPTqV1ruJHYbeKO7ZxAlpvz/ACqfEYvdcWuEEZgpYUqyOaC5yWdjgBMyCMkNuLByMzlzTlKwzvnW/L9154tbL16lBNSRz5eKi0uVypScGqTN2Lz0zzUnwfMx5hLR0nr2KkvGm05GDzt/BQHgtN5nuPJMCkDrClTbbddJGjhmOziOSAWxFNjxcFr8pjzAz80lVw+6YLYPcDzCtww/LeSJkZyOeZBjVDbhCRD51kEyRwjqVHXErTn8l5/4zm0KYcyOYjv/AHQMbeIFmiAOSfx+ELOJHG/mlN6bpcc2J/N1OrLFTWoTdvck30uhV2+hqEu5k/MIV3lPPeEWY2o2AYeBo4b3jmO9G/uTdaTejnj7rzsLaQUH+mPBSryl+jsAFh3qNdsBSFUZAHugBcc/0VDqEw2HLoaBJOQWt2bs5lIS4AuOZjLlySmx8KWN3j87v/yNB28VYsYXG1+eg9fZVzGHfW+oO14vAH3Kmypyjrqof0hAmfA5rrgZjlw9X/KpmLvrzBOYt1H8oU7q8ahNpsfWiAmAAZvyCm838+Z1Q6JuTwBMdgt5ojRxPfbTwSwwHrzW/wAJltOezjlnlCMcOAJBE+pSsBOqwhsxz/CXc12quA0EERwUTh2qVV7YlAAF5u4kxyH5zVtWdAJVRTrhhLRorOk/fGWaqJxUYmtVc34WweJIt4rL4mq9h3nwX9sAaSek9y3GOow0hucW7dFgKHs7Vr3qvLZ/QLnqSlY05sjR7Hxe+BN4AlwyicvNaem/RYLD7Aq4a9N5c3Vh8ewrY7FDywOeCLWBseqJMpdWVYPeBms37UYYPp74s5t+ZBNwfP8AlXmIqwCTks1tDGb7gwm38C/gqQo8PQeQJM3z0T9CmQCOF7dJ8/BP4akG2jw8E17oQTYWjqf2U1WkKDeSbD+Km1jR6/C45XEOtdP2XqtMG0dCutbwUnsll+MdCgibqfM+MfdDLYJ7euiY3D6PhnkpMpjMnLT1kqJOgCIE3m2t+05eKXr4k5wJ13cz28D60RmUC42gmdSQp1MGBdxEmdDc9uiDVlRpd81hf1e50VFiqJYQf0nI/btWndSiZbuwCM+8CIQa2BD2ZgtNtDB5ahGlYzjKs8l5wBzS1T4HFjswYniub5CaMTfhZyKF7l6IKy773mlYftUbxOo5qy2JgzUfJu1tzOvBVruQutXsKjuUxOZuev7QsnX1ciyFtVJriJiyiXGZPiuOcSrjAyys4gkm2Q66qHvTzCkxksECbmY8EMsQHWu7ERka9kceV0NjfXrsRGgfjp2Z5IIxh22cOLT6C6ynfjy5ZZqGHf8AFMD9tbo5aATwz7Zug02UxEFSceH8hSblzXWCEjRYCL6LrG/qlccvU3cFFVIqdr0nsO+wSJkjiNQrXZO0GubI69vA8Fyo0Gxt5H8Ktr4N9N2/Sgj9TQc+nFEqsahzwRz4KAosJtny+6zNHbAdaS0j9LrHxzRm7Ti0yE9TlaEOYzt4lCxGMAFiqV2OByVbtHbDWD4o7/LXwT0vFabUxzd0kmGgSSexUGyqRqPdVMgOgMGRDRee0m6FhMO/Ev3nsLKQIMOMF/C30+a1NGg1ogaWjIItPA2UiY4A3KK9pJ4AffPqjgc/XYuu7kpCtB3bcOvrkhvYRfPuTTFJg4K0lwJ0HejMoyI6ojWDWJHrJBq4ktmAgFatMCZAB5R6lC3RqfHtXqric4gfaUEniqI2KjWGRvHLIwNdI9SuPxpPZnHSOmiSc5RY7O+hSwDOrkm8WGt9f5XHVgNIFoA8c8kq8nNBf3p4RL2notIa9og5O59db+aoWHotFjGbzH30nqIWaFYDNG4MGLiub6GaoXN7mjSxCj8TmjiR5rZ4dpDRCymy6f8Aqt7dOQK17W/DnIEfZZxv2mGzqpMZJuh73JdYTmqxmsKTC1sEDPUnXsQiTxHQBep1nOMEmQLfwvbpzOuoRBXGtOevrNcLTMnx9ZLrlJgnJATaNOHoeabZBAHceHJLst6CZYCTnZFCZsIA0Ud5TY2RcjlxQ9yL5hI096V5jV1jQVMCErBKA9tyusYfQ1XntvKIx/rxRg0ri9nU6gIe0Hz7bKnrezIvuVqjDwneA71oy6VwQlh+TLM9nKk3xL+jG+acwvs1SYd929Ud9TzPcMgrtrVMhPB5AMptGQhGa3ouOC80IwvJIMAXHKRUDZVha4SVAvMqTiTrA/ZDe+3wjrr+yCGc8gR6AUHEOF89DHr7JZ1YnmAvCsB26/dPAHVp8ks5OufaLH1mlnNHZzTIu8KIFjB5fdSd671x5vHqSgBPKG5qZeycggOYUAF9u4+KwWPqFtR4GU+YlfQHt+EkaLJ4zBNc4k2PmNCi2T6rnm1TsxfFE/rQnG7IDslH+yO4qfLlp4U1st/+qzSTHfZbWpU+FtoBAy7PysHhqu69jtA4HxC3AeXnesBpyvYKYO3aZE3yTg3Ikt8cktSuIAufXRG/pbX/AAqZptduneGim9305FAa05TZEYALaFKmm1oOaO6GtiLnw7EFrD914Dj/AD6+yAmH8u5Ea9CyyXWu5JAcPjtUqZJNigMamd7d8k4E2u4jqFOeaXY6YAz/ACpPlsT3J4WjPpn9+q4x/CPXJDbW5nviUU1Mrz0QHidV4QvF/ILm+Bp5owJsGa9qoNfyHiuh54BGB14XmsPBRNU5ZeC9v2QHQBxE8FB9SLAX71B0xOXA2MqBfzPknhPOJJkmOKKaIzDvPJLvcdI7vuoGpnlPemBX0yOB7ChPYdW6aeakxzhfzXKlYxBAQAG0zojsMCHER+Eu1ccL9c0qDGKqtgQwA8exJMjj3rtbem4jkNAhmmQmHnPjJBe6UX3ZJU/6bj5IBDECGze/Tks3iA4OJGhgtm4gxnxGXCy0G1Hhogm3qwWIw2Mcx539TJ7TmexTZsacXK0OFqxp67FY74PoKsG6QC02PWFPf5LCzXTrPU3ytlsLE77GjUWjjaP36rGU1qPZL5j2ha1h18bFrAwSB8RQqry7NFq/MFGhl65pRFheIXmi+a7VzK9T19cVRCCpFvULjxABF+aGPXimKHylI4CwQmGU9clzD59U1URUwtvXgKYd+EOmu08yqgojT0XqjJ1txXK+QXB8qcAjXKe+BFwl9B64L1PIpENUfJnwXGP42QmqTc+v3KoDsKI1vFDYjP8AugPC+nkg13Q4wPuinVArfcJQIkmLXQiTnbqm8L/8/dIVNe0+SYTewm5IHZfohBgPErrPl/5fhTp/N1CA97xotBkZyfBerV5EABcxnzHovYT5x1SDoowJfbg3U/hLVK5dExAyAsAj435j2fZIv9d6PoozCJuY5rpdFjf1xSy6cun2QDHvByU31Buz1VRj/kqf7T5FOv8A8R/2jyCmqjPbZxW86PQ4D1wVFXwu+OH0u9aKxxubuwf+qH+G+SX7bTmYqcDi3U3bj8puOH7K/ZVEZjvWe2x8zf8AaPMpvCfI3sT65lH4+rNj/9k=",
          outline:
            "瞭解陶藝的基本觀念、形式與製作工具，並一步一步帶你製作出屬於你自己的陶土作品！",
          process: [
            { time: "3:00 - 3:30 陶藝基本講解" },
            { time: "3:30 - 3:45 工具介紹" },
            { time: "3:45 - 4:00 休息時間" },
            { time: "4:00 - 5:10 個人創作時間" },
            { time: "5:10 - 5:30 作品分享" },
          ],
          cashTitle: "包含課程、材料並可將成中完成作品帶回家！",
          cash: [
            { money: "成年：1人 / 500元" },
            { money: "幼年：1人 / 400元" },
          ],
          date: [
            { time: "9月17日  3:00 - 5:30 p.m." },
            { time: "9月19日  3:00 - 5:30 p.m." },
            { time: "9月22日  3:00 - 5:30 p.m." },
          ],
        },
        {
          id: 2,
          title: "Mugasa姆嘎薩（在一起）",
          text: "MuGaSa 姆嘎薩，卑南族語 “在一起”意思MuGaSa 跟誰- Henna design by X : 印度手繪，手作小物，課程教學- 姆姆的抽屜 ：泰國/印度 服飾",
          img: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/13062463_173287223065301_417752906546880693_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_y6e9w-MXyAAX_DELiZ&_nc_oc=AQkM95RSk4WNy_j0MckW6Cx3fe_a9k_D9_xU8mSu4BZHW72TVqRp62OXMYTFsBPrO2A&tn=iL8cUp0Hhto7fLPm&_nc_ht=scontent-tpe1-1.xx&oh=ece85d8d5854ded20a67a9a8856dbf7e&oe=61A4F112",
        },
        {
          id: 3,
          title: "羊毛鉤織   Masa 工坊",
          text: "以原住民的手工藝作品，遵循古老鉤織傳統工法，鉤出傳統的山豬包 !!!!",
          img: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/16003116_1183325828381602_7451577900185011769_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=59UoUf_gy7MAX_U1snU&tn=iL8cUp0Hhto7fLPm&_nc_ht=scontent-tpe1-1.xx&oh=fd70af4d0b80d880a349c290c01d0b9d&oe=61A6D2E9",
        },
        {
          id: 4,
          title: "非玩布可",
          text: "陪伴著寶寶踏出第一步的禮物，以布類及鉤織親手製作寶寶系列、日常生活小物和配飾，在流動的時光中， 陪伴著日常–非玩布可手作布雜貨",
          img: "https://cdn02.pinkoi.com/store/play-zakka/logo/1/300x300.jpg",
        },
        {
          id: 5,
          title: "Soapohlala 秋菊皂坊",
          text: "以台東在地素材創作，除了為每天努力的妳用心製作的手工皂之外，我們也販售薰香用伴手禮香磚，並提供DIY體驗課程(手工皂/護唇膏/防蚊液/精油膏/串皂/米蛋糕) 。",
          img: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/17200942_1262058283862967_4782320562103002807_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uJjPCHEGba8AX-l0xvR&_nc_ht=scontent-tpe1-1.xx&oh=957f1866bc58fd3591fc3933feecde33&oe=61A35C33",
        },
      ],
    };
  },
};
</script>

<style module>
.text {
  font-size: 14px;
  color: white;
}
.card {
  background-color: #e5e5e5;
}
.cardImg {
  text-align: center;
  padding-top: 10%;
}
.cardTitle {
  color: #43a0af;
  font-size: 16px;
  padding-top: 5%;
}
.cardText {
  padding-left: 10px;
}
.cardButton {
  color: #c4c4c4;

  padding-left: 60%;
}
.cardButtonText {
  color: black;
}
</style>