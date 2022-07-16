import FilterForm from '../filterForm/filterForm'
import c from './filterContent.module.css'
const FilterContent = ({ closeSidepaneHandler, setFilterValues }) => {
  return (
    <>
      <h5 className={c.heading}>Filters</h5>
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
    </>
  )
}

export default FilterContent
