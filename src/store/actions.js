import {
  RECEIVE_FIRSTPAGE,
  RECEIVE_CLASSIFY,
  RECEIVE_SHOPCART,
  RECEIVE_MYEPET
}from './types'
import {
  reqFirstPage,
  reqClassify,
  reqShopCart,
  reqMyEpet,
  RESULT_OK
} from '../api'
export default {
  getFirstPage({commit}){
    reqFirstPage().then(response =>{
      const result = response.data
      if(result.code === RESULT_OK){
        const firstPage = response.data.data
        commit(RECEIVE_FIRSTPAGE,{firstPage})
      }
    })
  },
  getClassify({commit}){
    reqClassify().then(response =>{
      const result = response.data
      if(result.code === RESULT_OK){
        const classify = response.data.data
        commit(RECEIVE_CLASSIFY,{classify})
      }
    })
  },
  getShopcart({commit}){
    reqShopCart().then(response =>{
      const result = response.data
      if(result.code === RESULT_OK){
        const shopcart = response.data.data
        commit(RECEIVE_SHOPCART,{shopcart})
      }
    })
  },
  getMyEpet({commit}){
    reqMyEpet().then(response =>{
      const result = response.data
      if(result.code === RESULT_OK){
        const myEpet = response.data.data
        commit(RECEIVE_MYEPET,{myEpet})
      }
    })
  }
}
