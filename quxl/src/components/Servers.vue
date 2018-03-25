<template>
  <div class="fit q-ma-xl q-pa-xl">
    <q-tabs>
      <q-tab slot="title" v-if="filteredservers" v-for="server in filteredservers" :label="server.id" icon="computer" :name="'tab-' + server.id" :key="server.id"/>
      <q-tab-pane v-if="filteredservers" v-for="server in filteredservers" :name="'tab-' + server.id" :key="server.id">
        <div class="row float-right">
        <q-field labelWidth="12" helper="RAM" v-bind:label="parseFloat((server.info.free_memory/1024).toFixed(2)) + ' GB free'">
        <q-knob :value="parseFloat((server.info.total_memory - server.info.free_memory)/1024).toFixed(2)"
        :max="server.info.total_memory/1024"
        color="primary"
        size="4em"
        readonly/>
      </q-field>
      <q-field labelWidth="12" helper="CPU" v-bind:label="server.info.free_cpus + ' CPUs free'">
      <q-knob :value="server.info.nr_cpus - server.info.free_cpus"
      :max="server.info.nr_cpus"
      color="secondary"
      size="4em"
      readonly/>
    </q-field>
  </div>
        <div class="row">
          <Domain v-if="server.domains" v-for="domain in server.domains" :key="domain.domid" :domain="domain" />
        </div>
      </q-tab-pane>
    </q-tabs>
  </div>
</template>
<style>
</style>

<script>
import { QTabs, QTab } from 'quasar'
import Domain from '../components/Domain.vue'
export default {
  components: { Domain, QTabs, QTab },
  computed: {
    filteredservers () {
      console.log('filteredservers Servers.vue')
      console.log(this.servers)
      return this.servers
    }
  },
  props: [
    'servers'
  ],
  name: 'Servers'
}
</script>
