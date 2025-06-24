import axios from 'axios'
import config from '../config'

// Create axios instance with default configuration
const api = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for adding authentication token
api.interceptors.request.use(
  (configuration) => {
    const token = localStorage.getItem(config.AUTH_TOKEN_KEY)
    if (token) {
      configuration.headers.Authorization = `Bearer ${token}`
    }
    return configuration
  },
  (error) => Promise.reject(error)
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config

    // Handle specific error scenarios
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Token expired or unauthorized
          localStorage.removeItem(config.AUTH_TOKEN_KEY)
          window.location.href = '/login'
          break
        case 403:
          console.error('Access forbidden')
          break
        case 404:
          console.error('Resource not found')
          break
        case 500:
          console.error('Server error')
          break
      }
    }

    return Promise.reject(error)
  }
)

// API service methods
export const apiService = {
  // Report-related API calls
  getReports: (page = 1, limit = 10) => 
    api.get(`/reports?page=${page}&limit=${limit}`),
  
  uploadReport: (reportData) => 
    api.post('/reports/upload', reportData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
  
  getReportDetails: (reportId) => 
    api.get(`/reports/${reportId}`),
  
  // User-related API calls
  getUserProfile: () => 
    api.get('/user/profile'),
  
  updateUserProfile: (profileData) => 
    api.put('/user/profile', profileData),
  
  // Alerts and Notifications
  getAlerts: (page = 1, limit = 5) => 
    api.get(`/alerts?page=${page}&limit=${limit}`),
  
  // Dashboard metrics
  getDashboardMetrics: () => 
    api.get('/dashboard/metrics')
}

export default api