/*
export const someMutation = (state) => {
}
*/
// import * as types from './mutation-types'
import Vue from 'vue'

export const FETCH_SERVERS = (state, {serverdata}) => {
  console.log('mutations')
  console.log(serverdata)
  // state.servers = { ...state.servers, : server}
  Vue.set(state.servers, serverdata.id, {'id': serverdata.id,
    'domains': serverdata.domains,
    'info': serverdata.info})
  console.log(' post mutations')
  console.log(state.servers)
}
