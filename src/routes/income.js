import express from 'express'
import Income from '../controller/income.js'
const router =express.Router()

router.post('/',Income.addIncome).get('/incomes',Income.getIncomes).delete('/income/:id',Income.deleteIncome)

   

export default router