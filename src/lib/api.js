const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function apiCall(endpoint, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API request failed');
  }

  return response.json();
}

export const api = {
  // Auth
  register: (data) => apiCall('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => apiCall('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  verifyToken: () => apiCall('/auth/verify'),

  // Users
  getProfile: () => apiCall('/users/profile'),
  updateProfile: (data) => apiCall('/users/profile', { method: 'PUT', body: JSON.stringify(data) }),
  getEnrollments: () => apiCall('/users/enrollments'),

  // Programs
  getPrograms: () => apiCall('/programs'),
  getProgram: (id) => apiCall(`/programs/${id}`),

  // Enrollments
  createEnrollment: (data) => apiCall('/enrollments', { method: 'POST', body: JSON.stringify(data) }),
  getEnrollment: (id) => apiCall(`/enrollments/${id}`),
  updateProgress: (id, data) => apiCall(`/enrollments/${id}/progress`, { method: 'PUT', body: JSON.stringify(data) }),
  cancelEnrollment: (id) => apiCall(`/enrollments/${id}/cancel`, { method: 'PUT' }),

  // Contacts
  createContact: (data) => apiCall('/contacts', { method: 'POST', body: JSON.stringify(data) }),

  // Analytics
  getDashboard: () => apiCall('/analytics/dashboard'),

  // Payments
  createPaymentIntent: (data) => apiCall('/payments/intent', { method: 'POST', body: JSON.stringify(data) }),
  confirmPayment: (data) => apiCall('/payments/confirm', { method: 'POST', body: JSON.stringify(data) }),
};
