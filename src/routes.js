const express = require('express');

const ClientController = require('./controllers/ClientController');

const AddressController = require('./controllers/AddressController');

const authMiddleware = require('./middlewares/auth');

const router = express.Router();


router.get('/clients', authMiddleware, ClientController.index);
router.post('/clients', ClientController.store);
router.put('/clients/:client_id', ClientController.update);
router.delete('/clients/:client_id', ClientController.delete);
router.post('/clients/login', ClientController.login);

router.use(authMiddleware);

router.get('/clients/:client_id/address', AddressController.index);
router.post('/clients/:client_id/address', AddressController.store);
router.put('/clients/:id/address', AddressController.update);
router.delete('/clients/:id/address', AddressController.delete);



module.exports = router;