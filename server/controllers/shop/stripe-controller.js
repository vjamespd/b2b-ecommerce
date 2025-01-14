const stripe = require('stripe')('sk_test_51Qh0YWKBrIEQW8JfXC43CfBtMIgILHAuUvrfRlZv8g5AlAokYIMPAZQ4ls0VCcUhmOF51JwukWtxOT2W2MDAn0e100QzWVBItR'); // Replace with your actual Stripe Secret Key

exports.createCheckoutSession = async (req, res) => {
  try {
    const { cartItems } = req.body;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'usd', 
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment', 
      success_url: 'http://localhost:3000/success', 
      cancel_url: 'http://localhost:3000/cart', 
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Checkout Session:', error);
    res.status(500).json({ error: 'Failed to create Checkout Session' });
  }
};