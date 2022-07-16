import cx from 'classnames';
import c from './sidepane.module.css';

const Sidepane = ({ isOpen, closeSidepanHandler }) => {
    return <div className={cx(c.sidepane, {
        [c.isOpen]: isOpen,
        [c.isClosed]: !isOpen
    })}>
        sidepane contents here

        <button onClick={closeSidepanHandler}>close</button>
    </div>
}

export default Sidepane