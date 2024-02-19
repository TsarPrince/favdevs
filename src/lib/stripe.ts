import { type Stripe, loadStripe } from "@stripe/stripe-js";
const STRIPE_PUBLISHABLE_KEY = import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY;

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    console.log("loadStripe called");
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
