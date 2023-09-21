import '../styles/Section.css'

import { FaChevronDown } from 'react-icons/fa'

function Section({ name, isExpanded, onToggle, children }) {
  return (
    <div className={`section ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className='section-header' onClick={onToggle}>
        <h1>{name}</h1>
        <FaChevronDown className='chevron' />
      </button>
      <form>{children}</form>
    </div>
  )
}

export default Section
