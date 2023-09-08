import React from 'react'
import ReactDOM from 'react-dom/client'
import FormContainer from './components/FormContainer'
import ResumeContainer from './components/ResumeContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormContainer />
    <ResumeContainer />
  </React.StrictMode>,
)
