const { WebhookClient } = require('dialogflow-fulfillment');
const { Router } = require('express');
const router = Router();

const { welcome, getServicios, webhook, recibirMensajes } = require('../controllers/index.controller');

router.get('/', welcome);
router.get('/test', getServicios);
router.post('/mensajes', recibirMensajes);
router.post('/webhook', webhook);

module.exports = router;