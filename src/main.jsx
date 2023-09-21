import React from 'react'
import ReactDOM from 'react-dom/client'
import SectionContainer from './components/SectionContainer'
import ResumeContainer from './components/ResumeContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionContainer />
    <ResumeContainer />
  </React.StrictMode>,
)
