const express = require('express');

const router = express.Router();

const ClientController = require('./controllers/ClientController');


router.get('/clients', ClientController.index);

router.post('/clients', ClientController.store);

router.put('/clients/:client_id', ClientController.update);

router.delete('/clients/:client_id', ClientController.delete);

router.post('/clients/login', ClientController.login);

module.exports = router;