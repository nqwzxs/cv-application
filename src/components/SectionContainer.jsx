import '../styles/SectionContainer.css'

import { useState } from 'react'

import Section from './Section'
import InputGroup from './InputGroup'

function SectionContainer({
  personalInfo,
  education,
  experience,
  handleChange,
}) {
  const [expandedSection, setExpandedSection] = useState(0)

  const handleSectionToggle = (sectionId) => {
    if (sectionId === expandedSection) {
      setExpandedSection(null)
      return
    }

    setExpandedSection(sectionId)
  }

  return (
    <div className='section-container'>
      <Section
        name='Personal details'
        isExpanded={expandedSection === 0}
        onToggle={() => handleSectionToggle(0)}
      >
        <InputGroup
          labelText='Full name'
          type='text'
          id='name'
          value={personalInfo.fullName}
          onChange={(event) => handleChange(event, 'personalInfo', 'fullName')}
        />
        <InputGroup
          labelText='Email'
          type='email'
          id='email'
          value={personalInfo.email}
          onChange={(event) => handleChange(event, 'personalInfo', 'email')}
        />
        <InputGroup
          labelText='Phone number'
          type='tel'
          id='phone-number'
          value={personalInfo.phoneNumber}
          onChange={(event) =>
            handleChange(event, 'personalInfo', 'phoneNumber')
          }
        />
        <InputGroup
          labelText='Address'
          type='text'
          id='address'
          value={personalInfo.address}
          onChange={(event) => handleChange(event, 'personalInfo', 'address')}
        />
      </Section>
      <Section
        name='Education'
        isExpanded={expandedSection === 1}
        onToggle={() => handleSectionToggle(1)}
      >
        <InputGroup
          labelText='School name'
          type='text'
          id='school-name'
          value={education.schoolName}
          onChange={(event) => handleChange(event, 'education', 'schoolName')}
        />
        <InputGroup
          labelText='Title of study'
          type='text'
          id='title-of-study'
          value={education.titleOfStudy}
          onChange={(event) => handleChange(event, 'education', 'titleOfStudy')}
        />
        <div className='date-group'>
          <InputGroup
            labelText='Start date'
            type='text'
            id='start-date'
            value={education.startDate}
            onChange={(event) => handleChange(event, 'education', 'startDate')}
          />
          <InputGroup
            labelText='End date'
            type='text'
            id='end-date'
            value={education.endDate}
            onChange={(event) => handleChange(event, 'education', 'endDate')}
          />
        </div>
      </Section>
      <Section
        name='Experience'
        isExpanded={expandedSection === 2}
        onToggle={() => handleSectionToggle(2)}
      >
        <InputGroup
          labelText='Company name'
          type='text'
          id='company-name'
          value={experience.companyName}
          onChange={(event) => handleChange(event, 'experience', 'companyName')}
        />
        <InputGroup
          labelText='Position title'
          type='text'
          id='position-title'
          value={experience.positionTitle}
          onChange={(event) =>
            handleChange(event, 'experience', 'positionTitle')
          }
        />
        <div className='date-group'>
          <InputGroup
            labelText='Start date'
            type='text'
            id='start-date'
            value={experience.startDate}
            onChange={(event) => handleChange(event, 'experience', 'startDate')}
          />
          <InputGroup
            labelText='End date'
            type='text'
            id='end-date'
            value={experience.endDate}
            onChange={(event) => handleChange(event, 'experience', 'endDate')}
          />
        </div>
        <InputGroup
          labelText='Description'
          type='textarea'
          id='description'
          value={experience.description}
          onChange={(event) => handleChange(event, 'experience', 'description')}
        />
      </Section>
    </div>
  )
}

export default SectionContainer
