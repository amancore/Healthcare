import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Lazy load pages for performance
const UploadReport = React.lazy(() => import('./pages/UploadReport'))
const ExtractedReport = React.lazy(() => import('./pages/ExtractedReport'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const UserProfile = React.lazy(() => import('./pages/UserProfile'))
const Alerts = React.lazy(() => import('./pages/Alerts'))

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<UploadReport />} />
          <Route path="/report/:id" element={<ExtractedReport />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App