import InputGroup from './InputGroup'

function EducationForm() {
  return (
    <form>
      <h1>Education</h1>
      <InputGroup labelText='School name' type='text' id='school-name' />
      <InputGroup labelText='Title of study' type='text' id='title-of-study' />
      <InputGroup labelText='Start date' type='text' id='start-date' />
      <InputGroup labelText='End date' type='text' id='end-date' />
    </form>
  )
}

export default EducationForm
