<template>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm8 md6>
        <panel title="Songs">
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
            </v-flex>

            <v-flex class="md6">
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
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
      song: {}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    console.log(this.song)
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
