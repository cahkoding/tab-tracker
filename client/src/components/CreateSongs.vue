<template>
  <v-layout>
    <v-flex xs12 sm4 md4>
      <panel title="Song Metadata">
        <v-text-field
          v-model="song.title"
          placeholder="title"
          :rules="[required]"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.artist"
          placeholder="artist"
          :rules="[required]"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.genre"
          placeholder="genre"
          :rules="[required]"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.album"
          placeholder="album"
          :rules="[required]"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.albumImageUrl"
          placeholder="image url"
          :rules="[required]"
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.youtubeId"
          placeholder="youtubeId"
          :rules="[required]"
        ></v-text-field>
        <div class="message" v-html="message"></div>
      </panel>
    </v-flex>

     <v-flex xs12 sm8 md8>
      <panel title="Song Structure" class="ml-4">
        <!-- <br> -->
        <v-text-field
          v-model="song.lyrics"
          placeholder="lyrics"
          :rules="[required]"
          multi-line
        ></v-text-field>
        <!-- <br> -->
        <v-text-field
          v-model="song.tab"
          placeholder="tab"
          :rules="[required]"
          multi-line
        ></v-text-field>
        <!-- <br> -->

        <div class="message" v-html="message"></div>
        <br>
        <v-btn
          class="red"
          @click="createSongs">
          Store
        </v-btn>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      message: null,
      alert: true,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createSongs () {
      const areAllFieldsAllFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsAllFilledIn) {
        this.message = 'Please fill in all the required fields'
        return
      }

      try {
        const response = await SongService.store(this.song)
        this.message = 'Succesfully Stored'
        this.$router.push({
          name: 'songs'
        })
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
