import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/api1/firstPage',{code:0,data:apiData.firstPage})
Mock.mock('/api1/classify',{code:0,data:apiData.classify})
Mock.mock('/api1/shopCart',{code:0,data:apiData.shopcart})
Mock.mock('/api1/myEpet',{code:0,data:apiData.myEpet})
