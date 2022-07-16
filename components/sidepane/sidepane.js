import cx from 'classnames'
import c from './sidepane.module.css'

const Sidepane = ({ isOpen, closeSidepanHandler }) => {
  const sidepaneClass = cx(c.sidepane, {
    [c.isOpen]: isOpen,
    [c.isClosed]: !isOpen,
  })

  return (
    <div className={sidepaneClass}>
      sidepane contents here
      <button onClick={closeSidepanHandler}>close</button>
    </div>
  )
}

export default Sidepane
