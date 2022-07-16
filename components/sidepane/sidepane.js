import cx from 'classnames'
import c from './sidepane.module.css'

const Sidepane = ({ children, isOpen, closeHandler }) => {
  const sidepaneClass = cx(c.sidepane, {
    [c.isOpen]: isOpen,
    [c.isClosed]: !isOpen,
  })

  return (
    <div className={sidepaneClass}>
      {children}
      <button className={c.closeSidepaneButton} onClick={closeHandler}>
        X
      </button>
    </div>
  )
}

export default Sidepane
