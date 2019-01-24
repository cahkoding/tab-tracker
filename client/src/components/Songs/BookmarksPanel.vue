<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.Song.title}}
        </td>
        <td class="text-xs-left">
          {{props.item.Song.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: []
    }
  },
  async mounted () {
    try {
      const userId = this.$store.state.user.id
      const response = await BookmarksService.bookmarkedSongs(userId)
      this.bookmarks = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>

</style>
