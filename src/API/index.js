const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/daxkerchner/players'
// not using export default
// we're just going to export multiple things
// and no special default export
// could do: export function getAllPlayers() {
export const getAllPlayers = async () => {
  const { data } = await axios.get(BASE_URL)
  console.log('data', data)
  return data.data.players
}
export const getSinglePlayer = async (playerId) => {
  const { data } = await axios.get(BASE_URL +'/'+  playerId)
  console.log('data', data)
  return data.data.player
}
export const addPlayer = async (player) => {
  await axios.post(BASE_URL, player)
}

export const deletePlayer = async (playerId) => {
  await axios.delete(BASE_URL + '/' + playerId)
}