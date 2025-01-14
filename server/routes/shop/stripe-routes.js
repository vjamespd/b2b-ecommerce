const express = require('express');

const {
    createCheckoutSession,
  } = require("../../controllers/shop/stripe-controller");

const router = express.Router();

router.post('/create-checkout-session', stripeController.createCheckoutSession);

module.exports = router;