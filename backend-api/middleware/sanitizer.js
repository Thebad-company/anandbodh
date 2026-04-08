import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeString(str) {
  if (typeof str !== 'string') return str;
  
  // Remove HTML tags and dangerous characters
  return DOMPurify.sanitize(str, { ALLOWED_TAGS: [] })
    .trim()
    .replace(/[<>]/g, '');
}

/**
 * Sanitize email
 */
export function sanitizeEmail(email) {
  if (typeof email !== 'string') return email;
  
  return email
    .toLowerCase()
    .trim()
    .replace(/[<>]/g, '');
}

/**
 * Sanitize phone number
 */
export function sanitizePhone(phone) {
  if (typeof phone !== 'string') return phone;
  
  // Remove all non-digit characters except + and -
  return phone.replace(/[^\d+\-]/g, '');
}

/**
 * Sanitize object recursively
 */
export function sanitizeObject(obj) {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'string') {
    return sanitizeString(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }
  
  if (typeof obj === 'object') {
    const sanitized = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
    }
    return sanitized;
  }
  
  return obj;
}

/**
 * Express middleware for sanitizing request body
 */
export function sanitizeMiddleware(req, res, next) {
  if (req.body) {
    req.body = sanitizeObject(req.body);
  }
  
  if (req.query) {
    req.query = sanitizeObject(req.query);
  }
  
  if (req.params) {
    req.params = sanitizeObject(req.params);
  }
  
  next();
}

export default {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeObject,
  sanitizeMiddleware
};
