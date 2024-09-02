<!-- App.vue -->
<template>
    <div id="app">
      <header-component></header-component>
      <router-view></router-view>
      <footer-component></footer-component>
    </div>
  </template>
  
  <script>
  import HeaderComponent from './components/Header.vue';
  import FooterComponent from './components/Footer.vue';
 
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
  </script>
  
<style>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
}
</style>
  