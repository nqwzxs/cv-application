import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

import '../styles/ResumeContainer.css'

function ResumeContainer({ resumeData, reference }) {
  function isEmpty(object) {
    return Object.values(object).every((value) => !value)
  }

  return (
    <div className='resume-container' ref={reference}>
      {!isEmpty(resumeData.personalInfo) && (
        <div className='resume-header'>
          <h1>{resumeData.personalInfo.fullName}</h1>
          <div className='contacts'>
            {resumeData.personalInfo.email && (
              <span className='contact-group'>
                <FaEnvelope />
                {resumeData.personalInfo.email}
              </span>
            )}
            {resumeData.personalInfo.phoneNumber && (
              <span className='contact-group'>
                <FaPhoneAlt />
                {resumeData.personalInfo.phoneNumber}
              </span>
            )}
            {resumeData.personalInfo.address && (
              <span className='contact-group'>
                <FaLocationDot />
                {resumeData.personalInfo.address}
              </span>
            )}
          </div>
        </div>
      )}
      <div className='resume-main'>
        {!isEmpty(resumeData.education) && (
          <div className='education'>
            <h3>Education</h3>
            <div className='container'>
              <div>
                <p>
                  {resumeData.education.startDate}
                  {resumeData.education.startDate &&
                    resumeData.education.endDate && <span> - </span>}
                  {resumeData.education.endDate}
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold' }}>
                  {resumeData.education.schoolName}
                </p>
                <p>{resumeData.education.titleOfStudy}</p>
              </div>
            </div>
          </div>
        )}
        {!isEmpty(resumeData.experience) && (
          <div className='experience'>
            <h3>Experience</h3>
            <div className='container'>
              <div>
                <p>
                  {resumeData.experience.startDate}
                  {resumeData.experience.startDate &&
                    resumeData.experience.endDate && <span> - </span>}
                  {resumeData.experience.endDate}
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold' }}>
                  {resumeData.experience.companyName}
                </p>
                <p>{resumeData.experience.positionTitle}</p>
                <p style={{ marginTop: '0.5rem' }}>
                  {resumeData.experience.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeContainer
