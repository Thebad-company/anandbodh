'use client';

import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { api } from '@/lib/api';

export default function StripePaymentForm({ programId, programPrice, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!stripe || !elements) {
      setError('Payment system not loaded');
      return;
    }

    setProcessing(true);

    try {
      // Create payment intent on backend
      const paymentResponse = await api.createPaymentIntent({
        programId,
        amount: Math.round(programPrice * 100), // Convert to cents
      });

      const { clientSecret } = paymentResponse;

      // Confirm payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
        onError?.(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Create enrollment after successful payment
        const enrollmentResponse = await api.createEnrollment({
          programId,
          paymentIntentId: result.paymentIntent.id,
        });

        onSuccess?.(enrollmentResponse.enrollment);
      }
    } catch (err) {
      const errorMsg = err.message || 'Payment failed';
      setError(errorMsg);
      onError?.(errorMsg);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-group">
        <label>Card Details</label>
        <div className="card-element-wrapper">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#fa755a',
                },
              },
            }}
          />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-primary"
      >
        {processing ? 'Processing...' : `Pay $${programPrice.toFixed(2)}`}
      </button>

      <p className="payment-note">
        💳 Test card: 4242 4242 4242 4242 | Any future date | Any CVC
      </p>
    </form>
  );
}
