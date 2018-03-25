import axios from 'axios'

const protocol = 'http://'

const servers = {'nap-s001': 'localhost:5000/1',
  'nap-s002': 'localhost:5000/2'}

async function callForUrl (cb, url, key) {
  try {
    var response = await axios(protocol + url + '/info')
  } catch (responseError) { console.log(responseError) }

  const data = response.data
  const domains = []
  console.log(data.domains)
  for (let dom of data.domains) {
    const d = {}
    d.serverid = key
    d.domid = dom.domid
    d.config = dom.config
    domains.push(d)
  }
  console.log('calculated domains for ' + key)
  console.log(domains)
  var out = {'id': key, 'domains': domains, 'info': data.info}
  cb(out)
}

export default {
  getServer (cb, server) {
    if (server in servers) {
      callForUrl(cb, servers[server], server)
    }
  },
  getServers (cb) {
    // Make a request for a user with a given ID
    for (var key in servers) {
      console.log('api/servers.js - ' + key)
      console.log(protocol + servers[key] + '/domains')
      callForUrl(cb, servers[key], key)
    }
  }
}
