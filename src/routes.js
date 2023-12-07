const express = require('express');

const router = express.Router();

const ClientController = require('./controllers/ClientController');


router.get('/clients', ClientController.index);

module.exports = router;