import FilterForm from '../filterForm/filterForm'
import c from './filterContent.module.css'

interface FilterContentProps {
  closeSidepaneHandler(): void
  setFilterValues(args: unknown): void
}
const FilterContent: React.FC<FilterContentProps> = ({
  closeSidepaneHandler,
  setFilterValues,
}) => (
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

export default FilterContent
