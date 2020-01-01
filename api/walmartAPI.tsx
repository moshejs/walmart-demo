import axios from 'axios'

const pageUrl = 'https://pf-pets.azurewebsites.net/dog_toys'

export async function getProducts() {
  const { data } = await axios.get<any[]>(pageUrl)
  return data
}
