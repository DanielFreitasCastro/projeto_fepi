<template>
  <header id="main_header">
    <div class="header_content content">
      <h3>{{ title }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style scoped>
header#main_header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 70px;
}

header#main_header .header_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

