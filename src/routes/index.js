import express from 'express'
import router from './income.js'
import expanserouter from './expens.js'
const route=express()


route.use('/uses',router)
route.use('/expens',expanserouter)

export default route