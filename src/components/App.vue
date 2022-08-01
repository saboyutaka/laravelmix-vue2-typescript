<template>
  <div class="app">
    <ul>
      <li v-for="content in contents" :key="content">
        <panel :content="content"></panel>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Panel from "./Panel.vue";

export default Vue.extend({
  components: {
    Panel,
  },

  data: () => {
    return {
      contents: ["パネル1", "パネル2", "パネル3"],
    };
  },
});
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
