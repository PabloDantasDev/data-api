import { Request, Response } from 'express'
import { cpf } from 'cpf-cnpj-validator'
import axios from 'axios'

async function cpfController(req: Request, res: Response) {
  const params = req.params

  try {
    if (!cpf.isValid(String(params.cpf))) {
      throw new Error('Cpf inválido')
    }

    const { data } = await axios.get(`http://api.arcadiancenter.com/?token=3603c524-8609-11ec-a8a3-0242ac120002&base=cpfPro&con=${params.cpf}`)

    res.json(data)
  } catch(err) {
    return res.status(400).json({
      message: (err as Error).message
    })
  }
}

export { cpfController }