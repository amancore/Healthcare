import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
)

interface ChartProps {
  type: 'bar' | 'line' | 'pie'
  data: any
  options?: any
}

const Chart: React.FC<ChartProps> = ({ type, data, options }) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={options} />
      case 'line':
        return <Line data={data} options={options} />
      case 'pie':
        return <Pie data={data} options={options} />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-medical-card p-6">
      {renderChart()}
    </div>
  )
}

export default Chart