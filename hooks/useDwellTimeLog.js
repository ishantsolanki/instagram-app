import { useEffect, useMemo, useRef, useState } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

const useDwellTimeLog = (cb) => {
  const ref = useRef(null)
  const [timer, setTimer] = useState(null)
  const entry = useIntersectionObserver(ref, {})

  const isInViewport = useMemo(() => {
    return !!entry?.isIntersecting
  }, [entry])

  useEffect(() => {
    if (isInViewport) {
      !timer && setTimer(new Date().getTime())
    } else {
      if (!timer) return
      const endTime = new Date().getTime()
      setTimer(null)
      cb(endTime - timer)
    }
  }, [isInViewport, timer, cb])

  return [ref]
}

export default useDwellTimeLog
