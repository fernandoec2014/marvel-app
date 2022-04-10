
import { useState } from 'react'

import Styles from './Input.styles'

interface InputType {
  icon?: '' | 'search'
  type: string
  placeholder?: string
  maxLength: number
  disabled?: boolean
  initialValue?: string
  onChange: (value: string) => void
}

const Input: React.FC<InputType> = ({
  type = '',
  placeholder = '',
  maxLength = 40,
  disabled = false,
  initialValue = '',
  onChange,
}) => {

  const [value, setValue] = useState(initialValue ?? '')

  const handleChange = (e: string) => {
    setValue(e)
    onChange(e)
  }

  return (
    <Styles>
      <div className='input'>
        <input
          type={type}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </Styles>
  )

};

export default Input
