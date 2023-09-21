import '../styles/SectionContainer.css'

import { useState } from 'react'

import Section from './Section'
import InputGroup from './InputGroup'

function SectionContainer({ personalInfo, education, experience }) {
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
        <InputGroup labelText='Full name' type='text' id='name' />
        <InputGroup labelText='Email' type='email' id='email' />
        <InputGroup labelText='Phone number' type='tel' id='phone-number' />
      </Section>
      <Section
        name='Education'
        isExpanded={expandedSection === 1}
        onToggle={() => handleSectionToggle(1)}
      >
        <InputGroup labelText='School name' type='text' id='school-name' />
        <InputGroup
          labelText='Title of study'
          type='text'
          id='title-of-study'
        />
        <div className='date-group'>
          <InputGroup labelText='Start date' type='text' id='start-date' />
          <InputGroup labelText='End date' type='text' id='end-date' />
        </div>
      </Section>
      <Section
        name='Experience'
        isExpanded={expandedSection === 2}
        onToggle={() => handleSectionToggle(2)}
      >
        <InputGroup labelText='Company name' type='text' id='company-name' />
        <InputGroup
          labelText='Position title'
          type='text'
          id='position-title'
        />
        <div className='date-group'>
          <InputGroup labelText='Start date' type='text' id='start-date' />
          <InputGroup labelText='End date' type='text' id='end-date' />
        </div>
        <InputGroup labelText='Description' type='textarea' id='description' />
      </Section>
    </div>
  )
}

export default SectionContainer
