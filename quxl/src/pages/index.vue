<template>
<q-page class="flex flex-center">
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn
    round
    color="primary"
    @click="update"
    icon="update"
  />
</q-page-sticky>
  <Servers v-if="allservers" :servers="allservers" />
  </q-page>
</template>

<style>
</style>

<script>
// import axios from 'axios'
import Servers from '../components/Servers.vue'
import { mapGetters } from 'vuex'

export default {
  components: { Servers },
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'servers/servers'
    ]),
    allservers () {
      console.log('allservers')
      console.log(this['servers/servers'])
      return this['servers/servers']
    }
  },
  methods: {

    update () {
      this.$store.dispatch('servers/fetchServers')
    }
  }
}
</script>
