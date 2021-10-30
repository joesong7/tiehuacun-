import axios from 'axios'

const axios_ = axios.create({
  baseURL: "https://randomuser.me"
})

function getAPi (url, data) {
  return axios_.get(url, data)
}

function postApi (url, data) {
  return axios_.post(url, data)
}

export { getAPi, postApi }
