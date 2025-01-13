const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AQgzs0ZVlnY7I_CeZmwItN2W479qIPtb9n5R1JqKATAXW5XWrbBPuabNho346GwLRQS53awqv5XOVA-i",
  client_secret:
    "EMfr6HDnE6QyH1W6cgMw4G_a6pOJnc_-6rpGNAqydrzC50YOoCvCTudbsqqtmBRB65Bz8WcU2y-WNhM0",
});

module.exports = paypal;
