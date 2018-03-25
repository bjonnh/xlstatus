/*
export const someGetter = (state) => {
}
*/
export const servers = (state) => {
  console.log('getters servers')
  console.log(state)
  return state.servers
}
