<template>
    <div class="q-ma-sm q-pa-sm">
  <q-card>
    <q-card-title>
      {{ domain.domid }} {{ domain.config.c_info.name }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <div class="row">
        <div>
      <q-field labelWidth="12" helper="RAM" v-bind:label="target_mem + '/' + max_mem + ' GB'">
      <q-knob :value="target_mem"
      :max="max_mem"
      color="primary"
      size="4em"
      readonly/>
    </q-field>
  </div>
  <div>
    <q-field  labelWidth="12"  v-if="avail_vcpus" v-bind:label="avail_vcpus + '/' + max_vcpus" helper="CPU">
      <q-knob v-if="avail_vcpus" :value="avail_vcpus"
      :max="max_vcpus"
      color="secondary"
      :label="avail_vcpus"
      size="4em"
      readonly/>
    </q-field>
  </div>
  </div>
    </q-card-main>
  </q-card>
</div>
</template>

<style>
</style>

<script>
export default {
  computed: {
    target_mem () {
      return parseFloat((this.domain.config.b_info.target_memkb / 1024 / 1024).toFixed(2))
    },
    max_mem () {
      return parseFloat((this.domain.config.b_info.max_memkb / 1024 / 1024).toFixed(2))
    },
    avail_vcpus () {
      if (this.domain.config.b_info.avail_vcpus) {
        return this.domain.config.b_info.avail_vcpus.length
      } else {
        return false
      }
    },
    max_vcpus () {
      return parseInt((this.domain.config.b_info.max_vcpus).toFixed(0))
    }
  },
  props: [
    'domain'
  ],
  name: 'Domain'
}
</script>
