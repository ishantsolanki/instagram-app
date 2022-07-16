import cx from 'classnames'
import FilterForm from '../filterForm/filterForm'
import c from './sidepane.module.css'

const Sidepane = ({ isOpen, closeSidepaneHandler, setFilterValues }) => {
  const sidepaneClass = cx(c.sidepane, {
    [c.isOpen]: isOpen,
    [c.isClosed]: !isOpen,
  })

  return (
    <div className={sidepaneClass}>
      <FilterForm
        setFilterValues={(args) => {
          setFilterValues(args)
          closeSidepaneHandler()
        }}
        formConfig={{
          fields: [
            {
              name: 'beer_name',
              id: 'beer_name',
              label: 'Name',
              Component: 'input',
              type: 'text',
            },
            {
              name: 'brewed_before',
              id: 'brewed_before',
              label: 'Brewed Before',
              Component: 'input',
              type: 'date',
            },
          ],
        }}
      />
      <button onClick={closeSidepaneHandler}>close</button>
    </div>
  )
}

export default Sidepane
