<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm6 md5>
      <panel title="Create Songs">
        <v-form
          ref="form"
        >
        <v-text-field
          v-model="title"
          placeholder="title"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="artist"
          placeholder="artist"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="genre"
          placeholder="genre"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="album"
          placeholder="album"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="albumImageUrl"
          placeholder="image url"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="youtubeId"
          placeholder="youtubeId"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="lyrics"
          placeholder="lyrics"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="tab"
          placeholder="tab"
        ></v-text-field>
        <!-- <br> -->

        <div class="message" v-html="message"></div>
        <br>
        <v-btn
          class="red"
          @click="createSongs">
          Store
        </v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImageUrl: '',
      youtubeId: '',
      lyrics: '',
      tab: '',
      message: null,
      alert: true
    }
  },
  methods: {
    async createSongs () {
      try {
        const response = await SongService.store({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeId: this.youtubeId,
          lyrics: this.lyrics,
          tab: this.tab
        })
        this.message = 'Succesfully Stored'
        console.log(response.data)
      } catch (err) {
        this.message = err.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.message {
  color: green;
}
</style>
