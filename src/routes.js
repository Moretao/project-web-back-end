const express = require('express');

const ClientController = require('./controllers/ClientController');

const authMiddleware = require('./middlewares/auth');

const router = express.Router();


router.get('/clients', authMiddleware, ClientController.index);

router.post('/clients', ClientController.store);

router.put('/clients/:client_id', ClientController.update);

router.delete('/clients/:client_id', ClientController.delete);

router.post('/clients/login', ClientController.login);




module.exports = router;