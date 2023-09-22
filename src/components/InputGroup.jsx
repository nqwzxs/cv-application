import '../styles/InputGroup.css'

function InputGroup({ labelText, type, id, value, onChange }) {
  return (
    <div className='input-group'>
      <label htmlFor={id}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea onChange={onChange} id={id} value={value}></textarea>
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          autoComplete='true'
        />
      )}
    </div>
  )
}

export default InputGroup
