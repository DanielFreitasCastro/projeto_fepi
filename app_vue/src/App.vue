<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: #464646;
}

body {
  background-color: #fafafa;
  font: 14px Helvetica, Arial, sans-serifs;
  -webkit-font-smoothing: antialiased !important;
}

button {
  padding: 5px 30px;
  cursor: pointer;
  background-color: #5e99ff;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: #fff;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.4);
}

ul {
  list-style: none;
}

.content {
  width: 100%;
  max-width: 980px;
  height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 20px 30px;
}
</style>
