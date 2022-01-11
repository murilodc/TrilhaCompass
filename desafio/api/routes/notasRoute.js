const { Router } = require('express')
const NotasController = require('../controller/NotasController')

const router = Router()

router.post('/api/project', NotasController.criaNota)
router.get('/api/project', NotasController.getAll)
router.get('/api/project/:id', NotasController.pegaUmaNota)
router.put('/api/project/:id', NotasController.atualizaNota)
router.delete('/api/project/:id', NotasController.apagaNota)

module.exports = router