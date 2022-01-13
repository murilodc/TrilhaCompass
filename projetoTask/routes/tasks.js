const express = require('express')
const router = express.Router()

const { pegarTodasAsTasks, criarTask, pegarUmaTask, atualizarTask, deletarTask } = require('../controllers/tasks')

router.route('/').get(pegarTodasAsTasks)
router.route('/').post(criarTask)
router.route('/:id').get(pegarUmaTask).patch(atualizarTask).delete(deletarTask)

module.exports = router