<template>
  <panel title="Recently Viewed Song">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="recentlyViewedSongs">
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
import HistoriesService from '@/services/HistoriesService'
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
      recentlyViewedSongs: []
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
      const response = await HistoriesService.index({
        userId: userId
      })
      this.recentlyViewedSongs = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>

</style>
