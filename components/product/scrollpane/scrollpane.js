import { Children } from 'react'
import c from './scrollpane.module.css'

const ScrollPane = ({ children }) => (
  <div className={c.scrollPane}>
    {Children.toArray(children).map((child, index) => (
      <div className={c.scrollItem} key={index}>
        {child}
      </div>
    ))}
  </div>
)

export default ScrollPane
