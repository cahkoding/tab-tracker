<template>
  <v-layout>
    <v-flex xs12 sm8 md6>
      <bookmarks-panel />
      <histories-panel class="mt-2" />
    </v-flex>
    <v-flex xs12 sm8 md6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>
<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import BookmarksPanel from './BookmarksPanel'
import HistoriesPanel from './HistoriesPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    BookmarksPanel,
    HistoriesPanel
  }
}
</script>

<style scoped>
</style>
