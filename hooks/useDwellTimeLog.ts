import { useEffect, useMemo, useRef, useState } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

const useDwellTimeLog = (cb: (timer: number) => void) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [timer, setTimer] = useState<number | null>(null)
  const entry = useIntersectionObserver(ref!, {})

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
