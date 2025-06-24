import React from 'react'
import { FileText, TrendingUp, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const mockDashboardData = {
  totalReports: 42,
  recentReports: [
    { id: '001', name: 'Annual Checkup', date: '2024-06-10' },
    { id: '002', name: 'Blood Test', date: '2024-05-22' },
    { id: '003', name: 'Cardiac Screening', date: '2024-04-15' }
  ],
  reportTypes: {
    labels: ['Blood Test', 'Cardiac', 'Metabolic', 'Allergy'],
    data: [25, 15, 35, 10]
  }
}

const Dashboard: React.FC = () => {
  const pieChartData = {
    labels: mockDashboardData.reportTypes.labels,
    datasets: [
      {
        data: mockDashboardData.reportTypes.data,
        backgroundColor: [
          'rgba(0, 132, 255, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <motion.div 
          className="bg-white rounded-xl shadow-medical-card p-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between items-center mb-4">
            <FileText className="text-primary-500" size={32} />
            <span className="text-3xl font-bold text-primary-600">
              {mockDashboardData.totalReports}
            </span>
          </div>
          <h3 className="text-medical-text font-semibold">Total Reports</h3>
          <p className="text-medical-muted text-sm">Reports processed this year</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-medical-card p-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between items-center mb-4">
            <TrendingUp className="text-green-500" size={32} />
            <span className="text-3xl font-bold text-green-600">+12%</span>
          </div>
          <h3 className="text-medical-text font-semibold">Report Growth</h3>
          <p className="text-medical-muted text-sm">Compared to last month</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-medical-card p-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between items-center mb-4">
            <AlertCircle className="text-yellow-500" size={32} />
            <span className="text-3xl font-bold text-yellow-600">3</span>
          </div>
          <h3 className="text-medical-text font-semibold">Pending Reviews</h3>
          <p className="text-medical-muted text-sm">Reports need attention</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-medical-card p-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-medical-text">Recent Reports</h2>
          <div className="space-y-3">
            {mockDashboardData.recentReports.map(report => (
              <div 
                key={report.id} 
                className="flex justify-between items-center bg-medical-background p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium text-medical-text">{report.name}</p>
                  <p className="text-sm text-medical-muted">{report.date}</p>
                </div>
                <FileText className="text-primary-500" size={20} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-medical-card p-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-medical-text">Report Types</h2>
          <Pie 
            data={pieChartData} 
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' }
              }
            }} 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard