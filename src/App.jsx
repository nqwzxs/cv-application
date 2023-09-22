import { useState } from 'react'

import SectionContainer from './components/SectionContainer'
import ResumeContainer from './components/ResumeContainer'
import initialData from './initialData'

function App() {
  const [resumeData, setResumeData] = useState(initialData)

  function handleChange(event, section, input) {
    setResumeData({
      ...resumeData,
      [section]: { ...resumeData[section], [input]: event.target.value },
    })
  }

  return (
    <>
      <SectionContainer
        personalInfo={resumeData.personalInfo}
        education={resumeData.education}
        experience={resumeData.experience}
        handleChange={handleChange}
      />
      <ResumeContainer resumeData={resumeData} />
    </>
  )
}

export default App
