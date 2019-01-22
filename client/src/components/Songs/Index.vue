<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm8 md6>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>
<script>
import SongsPanel from './SongsPanel'
export default {
  components: {
    SongsPanel
  }
}
</script>

<style scoped>
</style>
