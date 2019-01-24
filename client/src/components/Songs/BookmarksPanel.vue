<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.title}}
        </td>
        <td class="text-xs-left">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
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
  computed: {
    ...mapState([
      'user'
    ])
  },
  async mounted () {
    try {
      const userId = this.user.id
      // const response = await BookmarksService.bookmarkedSongs(userId)
      const response = await BookmarksService.index({
        userId: userId
      })
      this.bookmarks = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>

</style>
