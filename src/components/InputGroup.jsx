import '../styles/InputGroup.css'

function InputGroup({ labelText, type, id }) {
  return (
    <div className='input-group'>
      <label htmlFor={id}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea id={id}></textarea>
      ) : (
        <input type={type} id={id} autoComplete='true' />
      )}
    </div>
  )
}

export default InputGroup
