const express = require('express')
const app = express()
const router = require('express').Router()
const convertionsController = require('../controllers/convertions.controllers')

// router.get('/api/convertions', convertionsController.getConvertions);
router.post('/api/convertions', convertionsController.createConvertion);
// router.delete('/api/convertions', convertionsController.deleteConvertions);

module.exports = router;