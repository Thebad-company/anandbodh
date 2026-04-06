'use client';

import { createContext, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const StripeContext = createContext();

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export function StripeProvider({ children }) {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
}

export function useStripe() {
  return useContext(StripeContext);
}
