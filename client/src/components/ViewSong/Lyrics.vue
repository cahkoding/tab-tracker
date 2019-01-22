<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics">
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
