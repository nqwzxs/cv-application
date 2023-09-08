function InputGroup({ labelText, type, id }) {
  return (
    <div className="input-group">
      <label htmlFor="school-name">{labelText}</label>
      {type === 'textarea' ? (
        <textarea id={id}></textarea>
      ) : (
        <input type={type} id={id} />
      )}
    </div>
  )
}

export default InputGroup
