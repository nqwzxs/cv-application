import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

import SectionContainer from './SectionContainer'
import ResumeContainer from './ResumeContainer'
import Toolbar from './Toolbar'

import exampleData from '../exampleData'

import '../styles/App.css'

function App() {
  const resumeRef = useRef()

  const [resumeData, setResumeData] = useState({ ...exampleData })

  function handleChange(event, section, input) {
    setResumeData({
      ...resumeData,
      [section]: { ...resumeData[section], [input]: event.target.value },
    })
  }

  function clearResume() {
    const clearedData = Object.keys(resumeData).reduce((acc, section) => {
      acc[section] = Object.keys(resumeData[section]).reduce(
        (innerAcc, input) => {
          innerAcc[input] = ''
          return innerAcc
        },
        {},
      )
      return acc
    }, {})

    setResumeData(clearedData)
  }

  function loadExample() {
    setResumeData(exampleData)
  }

  const printResume = useReactToPrint({
    content: () => resumeRef.current,
  })

  return (
    <>
      <Toolbar
        clearResume={clearResume}
        loadExample={loadExample}
        printResume={printResume}
      />
      <SectionContainer
        personalInfo={resumeData.personalInfo}
        education={resumeData.education}
        experience={resumeData.experience}
        handleChange={handleChange}
      />
      <ResumeContainer resumeData={resumeData} reference={resumeRef} />
    </>
  )
}

export default App
