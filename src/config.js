// Central configuration management for the application
const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.medicalreportai.com/v1',
  
  // Authentication Configuration
  AUTH_TOKEN_KEY: 'medical_ai_token',
  
  // Feature Flags
  FEATURES: {
    AI_REPORT_ANALYSIS: true,
    MULTI_REPORT_UPLOAD: true,
    SPECIALIST_RECOMMENDATIONS: true
  },
  
  // Pagination Settings
  PAGINATION: {
    REPORTS_PER_PAGE: 10,
    ALERTS_PER_PAGE: 5
  },
  
  // Error Handling Configuration
  ERROR_MESSAGES: {
    NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
    UNAUTHORIZED: 'Your session has expired. Please log in again.',
    VALIDATION_ERROR: 'Invalid data. Please check your inputs.'
  }
}

export default config