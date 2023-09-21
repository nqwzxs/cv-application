import { useState } from 'react'

import SectionContainer from './components/SectionContainer'
import ResumeContainer from './components/ResumeContainer'

function App() {
  const initialData = {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '+39 9999 9999 9999',
      address: 'London, UK',
    },
    education: {
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
    },
    experience: {
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  }

  const [resumeData, setResumeData] = useState(initialData)

  function handleChange() {}

  return (
    <>
      <SectionContainer
        personalInfo={resumeData.personalInfo}
        education={resumeData.education}
        experience={resumeData.experience}
      />
      <ResumeContainer resumeData={resumeData} />
    </>
  )
}

export default App
