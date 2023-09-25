import { useState } from 'react'

const useToggle = (defaultState = false) => {
  const [state, setState] = useState(defaultState)

  const toggle = () => {
    setState(prev => !prev)
  }

  return [state, toggle]
}

export default useToggle;
