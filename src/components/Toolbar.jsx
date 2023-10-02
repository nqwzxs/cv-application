import { FaPrint, FaRedoAlt, FaTrash } from 'react-icons/fa'

import '../styles/Toolbar.css'

function Toolbar({ clearResume, loadExample, printResume }) {
  return (
    <div className='toolbar'>
      <button onClick={loadExample}>
        <FaRedoAlt /> Load example
      </button>
      <button onClick={printResume}>
        <FaPrint /> Print
      </button>
      <button onClick={clearResume}>
        <FaTrash /> Clear
      </button>
    </div>
  )
}

export default Toolbar
