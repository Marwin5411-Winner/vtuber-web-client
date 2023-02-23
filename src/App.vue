<template>
  <div id="app">
    <!-- <div class="addVtuber-button">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div> -->
    <VtuberList :vtubers="vtubers" />
  </div>
</template>

<script>
import VtuberList from "./components/VtuberList.vue";
import axios from "axios";
//Import Json file
//import data from "./data/data.json";

export default {
  name: "App",
  components: {
    //HelloWorld,
    VtuberList,
  },
  data() {
    return {
      vtubers: {
        type: [Object, Array],
        validator: function (value) {
          return Array.isArray(value) || typeof value === "object";
        },
      },
    };
  },
  methods: {
    // getchannelList() {
    //   axios.get('https://hosting.snowdev.xyz/data.json', {
    //     headers: {
    //       "Origin": "http://localhost",
    //       'Access-Control-Allow-Origin': 'https://hosting.snowdev.xyz',
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //     .then(response => {
    //       this.vtubers = response.data;
    //       console.log(this.vtubers);
    //     })
    // }
    // getchannelListByFile() {
    //   this.vtubers = data;
    //   console.log(this.vtubers);
    // },
    getChannelListByAPI() {
      axios
        .get("http://localhost:3000/api/channels/yt", {
          headers: {
            //"Origin": "http://localhost:8080",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((response) => {
          this.vtubers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getChannelListByAPI();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #2c3e50;
  widows: 100%;
  position: relative;
}

.addVtuber-button {
  z-index: 5;
  bottom: 5%;
  right: 5%;
  padding: 20px;
  width: 80px;
  height: 80px;
  position: fixed;
  background-color: #6196cb;
  border-radius: 50% !important;
}
</style>
