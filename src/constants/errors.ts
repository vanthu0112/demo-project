export const HTTP_STATUS = {
  OK: 200, // Request succeeded
  CREATED: 201, // New resource has been created
  ACCEPTED: 202, // Request accepted but not yet processed
  NO_CONTENT: 204, // No content to send in response
  RESET_CONTENT: 205, // Request succeeded and the view should be reset
  PARTIAL_CONTENT: 206, // Request succeeded and returning partial data

  MOVED_PERMANENTLY: 301, // URL has moved permanently
  FOUND: 302, // URL has moved temporarily
  SEE_OTHER: 303, // Redirect to another URL
  NOT_MODIFIED: 304, // Content has not changed

  BAD_REQUEST: 400, // Invalid request
  UNAUTHORIZED: 401, // Authentication required
  PAYMENT_REQUIRED: 402, // Payment required
  FORBIDDEN: 403, // Access is forbidden
  NOT_FOUND: 404, // Resource not found
  METHOD_NOT_ALLOWED: 405, // Method not allowed
  REQUEST_TIMEOUT: 408, // Request timed out

  INTERNAL_SERVER_ERROR: 500, // Internal server error
  NOT_IMPLEMENTED: 501, // Functionality not implemented
  BAD_GATEWAY: 502, // Error from neighboring server
  SERVICE_UNAVAILABLE: 503, // Service is unavailable
  GATEWAY_TIMEOUT: 504, // Gateway timeout
};
