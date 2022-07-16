import { useState } from 'react'

const useBoolean = (initialValue) => {
  const [state, stateSetter] = useState(initialValue)

  return [state, [() => stateSetter(true), () => stateSetter(false)]]
}

export default useBoolean