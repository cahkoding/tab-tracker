<template>
  <div>
    <v-layout>
      <v-flex xs12 sm8 md6>
        <song-meta-data :song="song" />
      </v-flex>

      <v-flex md6 class="ml-2">
        <youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex md6 >
        <lyrics :song="song" />
      </v-flex>

      <v-flex md6 class="ml-2">
        <tab :song="song" />
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import Tab from './Tab'
import Lyrics from './Lyrics'
import Youtube from './Youtube'
import SongService from '@/services/SongsService'
import SongMetaData from '@/components/ViewSong/SongMetadata'
import HistoriesService from '@/services/HistoriesService'

export default {
  components: {
    SongMetaData,
    Youtube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    await HistoriesService.store({
      UserId: this.$store.state.user.id,
      SongId: songId
    })
  }
}
</script>

<style scoped>
</style>
