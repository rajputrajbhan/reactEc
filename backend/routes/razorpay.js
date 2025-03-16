// routes/razorpay.js
const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

// Create a Razorpay instance using your key credentials (store these securely in environment variables)
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,       // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET  // Your Razorpay Key Secret
});

// POST endpoint to create a Razorpay order
router.post('/order', async (req, res) => {
  const { amount } = req.body; // Amount should be in the smallest currency unit (paise)
  const options = {
    amount: amount,         // e.g., totalPrice * 100 if totalPrice is in INR
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
    payment_capture: 1      // Auto-capture payments
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    return res.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
