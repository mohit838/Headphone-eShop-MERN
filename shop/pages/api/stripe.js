const stripe = require("stripe")(process.env.NEXT_STRIPE_SECTECT_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_type: [card],
        billing_address_collection: "auto",
        shipping_option: [
          { shipping_rate: "shr_1LvHv0FJkdICTwVfK7NX82E9" },
          { shipping_rate: "shr_1LvHw4FJkdICTwVfy9EPYqyJ" },
        ],
        line_items: [
          {
            price: "{{PRICE_ID}}",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
