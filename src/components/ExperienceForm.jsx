import InputGroup from './InputGroup'

function ExperienceForm() {
  return (
    <form>
      <h1>Experience</h1>
      <InputGroup labelText='Company name' type='text' id='company-name' />
      <InputGroup labelText='Position title' type='text' id='position-title' />
      <InputGroup labelText='Start date' type='text' id='start-date' />
      <InputGroup labelText='End date' type='text' id='end-date' />
      <InputGroup labelText='Description' type='textarea' id='description' />
    </form>
  )
}

export default ExperienceForm
