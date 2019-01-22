<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  padding: 15px;
  font-size: 11px;
  height: 300px;
  overflow: auto;
  font-family: monospace;
  border-style: none;
  border-color: transparent;
}
</style>
