import { Children, useEffect, useRef, useMemo } from 'react'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import c from './scrollpane.module.css'

const ScrollPane = ({ children, scrollEndCallback }) => {
  const setRef = useRef(null)
  const entry = useIntersectionObserver(setRef, {
    threshold: 0.9,
  })

  const isIntersecting = useMemo(() => !!entry?.isIntersecting, [entry])

  useEffect(() => {
    if (isIntersecting) {
      scrollEndCallback()
    }
    // Only trigger the callback once when the ref comes into view
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting])

  return (
    <div className={c.scrollPane}>
      {Children.toArray(children).map((child, index) => (
        <div className={c.scrollItem} key={index}>
          {child}
        </div>
      ))}
      <div ref={setRef}>more</div>
    </div>
  )
}

export default ScrollPane
