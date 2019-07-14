<template>
  <div>
    <Header title="Lista" />
    <div id="list_content" class="content">
      <div v-if="!list">Carregando...</div>
      <div v-if="list && !list.length">
        <h2>Nenhum usuário encontrado!</h2>
      </div>
      <div v-if="list && list.length">
        <h1>Itens encontrados:</h1>
        <ul>
          <li v-for="item in list" class="item_list" v-bind:key="item.id">
            <div class="item_list_container">
              <img v-bind:src="item.avatar_url" v-bind:alt="item.avatar_url" />
              <div class="item_list_container_texts">
                <h3>{{item.login}}</h3>
                <a
                  v-bind:href="item.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{item.html_url}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { setTimeout } from "timers";

import Github from "../services/Github";

export default {
  name: "List",
  data: () => ({
    list: null
  }),
  components: {
    Header
  },
  methods: {
    onRouteSeted: async function(term) {
      this.list = null;

      const { data, status } = await Github.get(`users?q=${term}`);

      if (!term || !term.length) {
        this.$router.push({ name: "Home" });
        return;
      }

      if (status !== 200) {
        alert("Algo deu errado!");
        return;
      }

      this.list = data.items;
    }
  },
  created: function() {
    this.onRouteSeted(this.$route.params.term);
  },
  watch: {
    $route(to, from) {
      this.onRouteSeted(to.params.term);
    }
  }
};
</script>

<style scoped>
#list_content h1 {
  margin-bottom: 15px;
}

.item_list {
  margin-bottom: 10px;
  border-bottom: 1px solid #cecece;
}

.item_list .item_list_container {
  display: flex;
  padding: 10px;
}

.item_list .item_list_container img {
  width: 100px;
  margin-right: 10px;
  border-radius: 50px;
}

.item_list .item_list_container .item_list_container_texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.item_list .item_list_container .item_list_container_texts h3 {
  margin-bottom: 5px;
  text-transform: capitalize;
}
</style>

