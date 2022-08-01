<template>
  <div class="panel">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
.panel {
  border: 1px solid;
  border-radius: 20px;
  padding: 8px;
  margin-bottom: 4px;
}
</style>
