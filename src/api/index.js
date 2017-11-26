import axios from 'axios'

const FIRSTPAGE_URL = '/api1/firstPage'
const CLASSIFY_URL = '/api1/classify'
const SHOPCART_URL = '/api1/shopCart'
const MYEPET_URL = '/api1/myEpet'

export const RESULT_OK = 0

export function reqFirstPage() {
  return axios.get(FIRSTPAGE_URL)
}
export function reqClassify() {
  return axios.get(CLASSIFY_URL)
}
export function reqShopCart() {
  return axios.get(SHOPCART_URL)
}
export function reqMyEpet() {
  return axios.get(MYEPET_URL)
}
