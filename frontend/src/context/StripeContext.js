'use client';

import { createContext, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const StripeContext = createContext();

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

export function StripeProvider({ children }) {
  // If Stripe key is not available, just render children without Elements wrapper
  if (!stripePromise) {
    return children;
  }

  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
}

export function useStripe() {
  return useContext(StripeContext);
}
