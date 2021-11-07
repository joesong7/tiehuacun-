import axios from 'axios'

const axios_ = axios.create({
  baseURL: "https://api.line.me/oauth2/v2.1"
})

function getAPi (url, data) {
  return axios_.get(url, data)
}

function postApi (url, data) {
  return axios_.post(url, data)
}

export { getAPi, postApi }
