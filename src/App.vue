<template>
  <div id="app">
    <h3>App.vue</h3>
    <div>
      At this point "ThisShouldNotBeLoaded.js" shouldn't be loaded at all.<br>
      <br>
      After visiting <a href="/about">/about</a> or even going back "home" <a href="/">/ (home)</a> you should only get data from About.vue and Home.vue.<br>
      <br>
      Only clicking here should load it <a href="/fail">/fail</a>
      
    </div>

    <hr>
    <h4>The content of the selected route is:</h4>

    <router-view></router-view>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
