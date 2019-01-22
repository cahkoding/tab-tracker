<template>
  <panel title="Songs">
    <v-btn
      :to="{name: 'createsongs'}"
      slot="action"
      class="red accent-2"
      dark
      small
      absolute
      right
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div v-for="song in songs"
      class="song"
      :key="song.title">
      <v-layout>
        <v-flex md6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
            class="red accent-2"
            small
            dark>
            View
          </v-btn>
        </v-flex>

        <v-flex class="md6">
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 220px;
}

.song-title {
  padding: 10px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 50%;
  margin: 0 auto;
  border-radius: 70px;
}
</style>
