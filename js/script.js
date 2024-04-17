// const { createApp } = Vue

//   createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     }
//   }).mount('#app')

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World!",
      urlImg: "./img/test.jpg",
    };
  },
}).mount("#app");
