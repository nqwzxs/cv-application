import '../styles/ResumeContainer.css'

function ResumeContainer({ resumeData }) {
  return (
    <div className='resume-container'>
      <div className='resume-header'>
        <h1>{resumeData.personalInfo.fullName}</h1>
        <div className='contacts'>
          <div>{resumeData.personalInfo.email}</div>
          <div>{resumeData.personalInfo.phoneNumber}</div>
          <div>{resumeData.personalInfo.address}</div>
        </div>
      </div>
    </div>
  )
}

export default ResumeContainer
