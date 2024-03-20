const express = require('express')
const app = express()
const router = require('express').Router()

router.get('/api/convertions', convertionsController.getConvertions);
router.post('/api/convertions', convertionsController.postConvertions);
router.delete('/api/convertions', convertionsController.deleteConvertions);