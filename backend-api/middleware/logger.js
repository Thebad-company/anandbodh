import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Log levels
const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG'
};

// Get current timestamp
function getTimestamp() {
  return new Date().toISOString();
}

// Format log message
function formatLog(level, message, data = {}) {
  return JSON.stringify({
    timestamp: getTimestamp(),
    level,
    message,
    ...data
  });
}

// Write to log file
function writeToFile(level, message, data) {
  const logFile = path.join(logsDir, `${level.toLowerCase()}.log`);
  const logEntry = formatLog(level, message, data) + '\n';
  
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Failed to write to log file:', err);
  });
}

// Logger object
export const logger = {
  error: (message, data = {}) => {
    console.error(`[ERROR] ${getTimestamp()} - ${message}`, data);
    writeToFile(LOG_LEVELS.ERROR, message, data);
  },
  
  warn: (message, data = {}) => {
    console.warn(`[WARN] ${getTimestamp()} - ${message}`, data);
    writeToFile(LOG_LEVELS.WARN, message, data);
  },
  
  info: (message, data = {}) => {
    console.log(`[INFO] ${getTimestamp()} - ${message}`, data);
    writeToFile(LOG_LEVELS.INFO, message, data);
  },
  
  debug: (message, data = {}) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEBUG] ${getTimestamp()} - ${message}`, data);
      writeToFile(LOG_LEVELS.DEBUG, message, data);
    }
  }
};

// Express middleware for request logging
export function requestLogger(req, res, next) {
  const start = Date.now();
  
  // Log request
  logger.info('Incoming request', {
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.get('user-agent')
  });

  // Log response
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip
    });
  });

  next();
}

export default logger;
