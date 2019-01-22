<template>
  <panel title="Song Metadata">
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
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }"
          class="red accent-2"
          small
          dark>
          Edit
        </v-btn>
      </v-flex>

      <v-flex class="md6">
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
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

.song-tab {
  font-size: 11px;
  height: 300px;
  overflow: auto;
}
</style>
