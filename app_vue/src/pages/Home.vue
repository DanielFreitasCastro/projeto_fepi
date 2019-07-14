<template>
  <div>
    <Header title="Home" />
    <div id="home_content" class="content">
      <div class="home_form_container">
        <p>Informe um termo:</p>
        <form @submit.prevent="onSubmitForm">
          <input type="text" id="input_term" v-model="term" name="term" />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Home",
  data: val => ({
    term: ""
  }),
  components: {
    Header
  },
  methods: {
    onSubmitForm: function() {
      if (!this.term.length) {
        alert("Informe um termo!");
        return false;
      }
      this.$router.push({ path: `/lista/${this.term}` });
    }
  }
};
</script>

<style scoped>
#home_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

#home_content .home_form_container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #bcc8ff;
  padding: 30px;
}

#home_content .home_form_container form {
  text-align: center;
}

#home_content .home_form_container p {
  margin-bottom: 15px;
}

#home_content .home_form_container input {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
}
</style>

