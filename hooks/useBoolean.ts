import { useState, SetStateAction } from 'react'

const useBoolean = (
  initialValue: boolean
): [boolean, [() => void, () => void]] => {
  const [state, stateSetter] = useState<boolean>(initialValue)

  return [state, [() => stateSetter(true), () => stateSetter(false)]]
}

export default useBoolean
