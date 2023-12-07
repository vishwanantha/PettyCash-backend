import express from 'express'
import expense from '../controller/expense.js'
const router =express.Router()

router.post('/',expense.addExpense).get('/expenss',expense.getExpense).delete('/expenss/:id',expense.deleteExpense)

   

export default router