const express = require("express");
const router = express.Router();
const paypal = require("./paypal");

router.get("/success", (req, res) => {
  const paymentId = req.query.paymentId;
  const payerId = req.query.PayerID;

  const executePaymentData = {
    payer_id: payerId,
  };

  paypal.payment.execute(paymentId, executePaymentData, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send("Something went wrong.");
    } else {
      // Payment successful, handle success logic here
      res.send("Payment successful!");
    }
  });
});

router.get("/cancel", (req, res) => {
  // Payment cancelled, handle cancellation logic here
  res.send("Payment cancelled.");
});

module.exports = router;
