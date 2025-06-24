import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FileText, Download, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const mockReportData = {
  patientName: 'John Doe',
  age: 45,
  gender: 'Male',
  reportDate: '2024-06-15',
  summary: 'Patient shows mild cardiovascular risk factors. Recommended lifestyle modifications and follow-up tests.',
  keyMetrics: {
    cholesterol: 210,
    bloodPressure: '140/90',
    heartRate: 78
  },
  recommendations: [
    'Reduce saturated fat intake',
    'Increase physical activity',
    'Schedule follow-up in 3 months'
  ]
}

const ExtractedReport: React.FC = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState<'summary' | 'details' | 'analysis'>('summary')

  const chartData = {
    labels: ['Cholesterol', 'Blood Pressure', 'Heart Rate'],
    datasets: [
      {
        label: 'Health Metrics',
        data: [210, 140, 78],
        backgroundColor: [
          'rgba(0, 132, 255, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-medical-card p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FileText className="mr-3 text-primary-500" size={32} />
            <h1 className="text-2xl font-display font-bold text-medical-text">
              Medical Report Analysis
            </h1>
          </div>
          <div className="flex space-x-3">
            <button className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors">
              <Download className="inline-block mr-2" size={18} /> Download
            </button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              <Share2 className="inline-block mr-2" size={18} /> Share
            </button>
          </div>
        </div>

        <div className="mb-6 border-b border-medical-background">
          <nav className="flex space-x-6">
            {['summary', 'details', 'analysis'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`
                  pb-3 capitalize
                  ${activeTab === tab 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-medical-muted hover:text-medical-text'}
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'summary' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <h2 className="font-semibold mb-4 text-medical-text">Patient Information</h2>
              <div className="space-y-2 bg-medical-background p-4 rounded-lg">
                <p><strong>Name:</strong> {mockReportData.patientName}</p>
                <p><strong>Age:</strong> {mockReportData.age}</p>
                <p><strong>Gender:</strong> {mockReportData.gender}</p>
                <p><strong>Report Date:</strong> {mockReportData.reportDate}</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-4 text-medical-text">Report Summary</h2>
              <div className="bg-medical-background p-4 rounded-lg">
                <p>{mockReportData.summary}</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'details' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <h2 className="font-semibold mb-4 text-medical-text">Key Metrics</h2>
              <div className="bg-medical-background p-4 rounded-lg space-y-2">
                <p><strong>Cholesterol:</strong> {mockReportData.keyMetrics.cholesterol} mg/dL</p>
                <p><strong>Blood Pressure:</strong> {mockReportData.keyMetrics.bloodPressure} mmHg</p>
                <p><strong>Heart Rate:</strong> {mockReportData.keyMetrics.heartRate} bpm</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-4 text-medical-text">Recommendations</h2>
              <ul className="bg-medical-background p-4 rounded-lg space-y-2 list-disc pl-5">
                {mockReportData.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === 'analysis' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="font-semibold mb-4 text-medical-text">Health Metrics Visualization</h2>
            <div className="bg-medical-background p-6 rounded-lg">
              <Bar 
                data={chartData} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false }
                  }
                }} 
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default ExtractedReport