<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm8 md6>
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>
<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>
</style>
