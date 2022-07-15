import cx from 'classnames';
import {cSidepane, cIsClosed, cIsOpen} from './sidepane.module.css';

const Sidepane = ({ isOpen, closeSidepanHandler }) => {
    return <div className={cx(cSidepane, {
        [cIsOpen]: isOpen,
        [cIsClosed]: !isOpen
    })}>
        sidepane contents here

        <button onClick={closeSidepanHandler}>close</button>
    </div>
}

export default Sidepane