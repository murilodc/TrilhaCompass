const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

router.put('/:id',updatePerson)

router.delete('/:id',deletePerson)

router.get('/',getPeople)

router.post('/', createPerson)

router.post('/postman', createPersonPostman)

module.exports = router