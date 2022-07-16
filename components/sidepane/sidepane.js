import cx from 'classnames'
import c from './sidepane.module.css'

const Sidepane = ({ children, isOpen }) => {
  const sidepaneClass = cx(c.sidepane, {
    [c.isOpen]: isOpen,
    [c.isClosed]: !isOpen,
  })

  return <div className={sidepaneClass}>{children}</div>
}

export default Sidepane
