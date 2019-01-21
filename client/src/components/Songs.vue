<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm8 md6>
      <panel title="Songs">
        <div v-for="song in songs.data"
          :key="song.title">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = await SongService.index()
  }
}
</script>

<style scoped>
</style>
