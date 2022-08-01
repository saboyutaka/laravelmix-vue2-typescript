<template>
  <div class="panel">
    <p>{{ content }}</p>
    <p>{{ modifiedContent }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    content: String,
  },
  computed: {
    modifiedContent(): string {
      return this.content + this.content;
    },
  },
});
</script>

<style scoped>
.panel {
  border: 1px solid;
  border-radius: 20px;
  padding: 8px;
  margin-bottom: 4px;
}
</style>
