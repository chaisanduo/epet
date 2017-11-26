import {
  RECEIVE_FIRSTPAGE,
  RECEIVE_CLASSIFY,
  RECEIVE_SHOPCART,
  RECEIVE_MYEPET
}from './types'
export default {
  [RECEIVE_FIRSTPAGE](state,{firstPage}){
    state.firstPage = firstPage
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify = classify
  },
  [RECEIVE_SHOPCART](state,{shopcart}){
    state.shopcart = shopcart
  },
  [RECEIVE_MYEPET](state,{myEpet}){
    state.myEpet = myEpet
  }
}
