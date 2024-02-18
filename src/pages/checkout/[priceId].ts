import stripe from "stripe";
const SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY;
const stripeAdminClient = new stripe(SECRET_KEY);

export async function GET({ params, redirect }) {
  const FRONTEND_URL = import.meta.env.FRONTEND_URL;
  const priceId = params.priceId; // sth like: price_1Okm2KSE7yoY9qakAsOAtZrh

  if (!priceId) {
    return new Response(null, {
      status: 400,
      statusText: "priceId is required",
    });
  }
  const session = await stripeAdminClient.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: `${FRONTEND_URL}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: FRONTEND_URL,
  });

  // return redirect(session.url, 303);
  return new Response(JSON.stringify({ session }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Payment succeeds                 4242 4242 4242 4242
// Payment requires authentication  4000 0025 0000 3155
// Payment is declined              4000 0000 0000 9995
