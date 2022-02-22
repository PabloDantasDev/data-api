import express from 'express'
import { cpfController } from './controllers/cpfController'

const router = express.Router()

router.get('/cpf/:cpf', cpfController)

export { router }