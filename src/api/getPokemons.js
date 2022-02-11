import { API } from "./config"

const getPokemons = (limit = 151) => {
  const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)
  return getPokeApi
}

export default getPokemons