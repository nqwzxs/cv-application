import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PersonalForm from './PersonalForm'

import '../styles/FormContainer.css'

function FormContainer() {
  return (
    <div className='form-container'>
      <PersonalForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  )
}

export default FormContainer
