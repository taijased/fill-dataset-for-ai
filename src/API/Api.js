
import axios from 'axios'


let Api = axios.create({
  baseURL: "http://api.mmwro.revealyan.info/",
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json'
  }
})

export default Api