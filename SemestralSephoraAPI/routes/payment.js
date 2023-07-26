const router = require("express").Router();
const paypal = require("./paypal");

router.post("/payment", (req, res) => {
  const paymentData = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "/success",
      cancel_url: "http:l",
    },
    transactions: [
      {
        amount: {
          total: req.body.amount,
          currency: "USD",
        },
        description: "Payment description",
      },
    ],
  };

  paypal.payment.create(paymentData, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).json(error);
    } else {
      // Extract the PayPal approval URL from the response and send it to the client
      const approvalUrl = payment.links.find(
        (link) => link.rel === "approval_url"
      ).href;
      res.status(200).json({ approvalUrl });
    }
  });
});

module.exports = router;
