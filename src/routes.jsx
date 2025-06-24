import React from 'react'
import { Navigate } from 'react-router-dom'

// Lazy-loaded pages
const UploadReport = React.lazy(() => import('./pages/UploadReport'))
const ExtractedReport = React.lazy(() => import('./pages/ExtractedReport'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const UserProfile = React.lazy(() => import('./pages/UserProfile'))
const Alerts = React.lazy(() => import('./pages/Alerts'))

// Authentication placeholders (to be implemented with actual auth logic)
const PrivateRoute = ({ children }) => {
  const isAuthenticated = true // Replace with actual authentication check
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

const routes = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <UploadReport />
      </PrivateRoute>
    )
  },
  {
    path: '/report/:id',
    element: (
      <PrivateRoute>
        <ExtractedReport />
      </PrivateRoute>
    )
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    )
  },
  {
    path: '/alerts',
    element: (
      <PrivateRoute>
        <Alerts />
      </PrivateRoute>
    )
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]

export default routes