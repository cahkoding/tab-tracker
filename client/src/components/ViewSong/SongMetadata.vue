<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex md8>
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

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          @click="setAsBookmark"
          class="red accent-2"
          small
          dark>
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          @click="unsetAsBookmark"
          class="red accent-2"
          small
          dark>
          Unset As Bookmark
        </v-btn>
      </v-flex>

      <v-flex class="md4">
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      bookmark: null
      // bookmarkId: null
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = ((await BookmarksService.store({
          SongId: this.$route.params.songId,
          UserId: this.$store.state.user.id
        })).data).data
        // this.bookmarkId = this.bookmark.id
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        this.bookmark =
          ((await BookmarksService.destroy(this.bookmark.id)).data).data
          // ((await BookmarksService.destroy(this.bookmarkId)).data).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    async song () {
      try {
        if (this.$store.state.isUserLoggedIn) {
          const bookmark = (await BookmarksService.index({
            songId: this.song.id,
            userId: this.user.id
          })).data
          if (bookmark.length) {
            this.bookmark = bookmark[0]
            // this.bookmarkId = this.bookmark.bookmarkId
          }
        }
      } catch (err) {
        console.log(err)
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
  width: 80%;
  margin: 0 auto;
  border-radius: 80px;
}

.song-tab {
  font-size: 11px;
  height: 300px;
  overflow: auto;
}
</style>
