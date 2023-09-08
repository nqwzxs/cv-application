import InputGroup from './InputGroup'

function PersonalForm() {
  return (
    <form>
      <h1>Personal info</h1>
      <InputGroup labelText='Name' type='text' id='name' />
      <InputGroup labelText='Email' type='email' id='email' />
      <InputGroup labelText='Phone number' type='tel' id='phone-number' />
    </form>
  )
}

export default PersonalForm
