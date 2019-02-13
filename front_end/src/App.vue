<template>
  <div id="app">
    
    <MenuBar />

    <router-view/>
    
  </div>
</template>

<script>
import MenuBar from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    MenuBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Offside|Open+Sans');

html, body,
nav, main, section, article, div,
h1, h2, h3, h4, p, 
form, label, input, textarea, button, a,
ul, li {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    line-height: 2.3em;
    font-family: 'Open Sans', sans-serif;
}
html, body, #app{ width: 100%; height: 100%; }
button { cursor: pointer;}
.ssp-list-posts {
    width: 100%;
    height: auto;
    padding: 0 8%;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}


</style>
