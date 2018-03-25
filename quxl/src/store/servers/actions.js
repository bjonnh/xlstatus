import APIServers from '../../api/servers'
import * as types from './mutation-types.js'

export const globalFetchServers = ({ commit }) => {
  commit(types.FETCH_SERVERS)
}

export const fetchServers = ({ commit }) => {
  APIServers.getServers(serverdata => {
    commit(types.FETCH_SERVERS, { serverdata })
  })
}

// export default actions
