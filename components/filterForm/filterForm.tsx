import { FormEventHandler } from 'react'
import capture, { TYPES } from '../../analytics/capture'
import c from './filterForm.module.css'

interface FilterFormProps {
  formConfig: {
    fields: {
      name: string
      id: string
      label: string
      Component: React.ElementType
      type: string
    }[]
  }
  setFilterValues(args: unknown): void
}

const FilterForm: React.FC<FilterFormProps> = ({
  formConfig,
  setFilterValues,
}) => {
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())

    setFilterValues(fieldValues)
    capture(TYPES.CLICK, { type: 'Apply filter' })
  }

  return (
    <form onSubmit={onFormSubmit}>
      {formConfig.fields.map(({ Component, ...field }) => (
        <div className={c.field} key={field.id}>
          <label className={c.label} htmlFor={field.id}>
            {field.label}
          </label>
          <Component name={field.name} id={field.id} type={field.type} />
        </div>
      ))}

      <hr className={c.divider} />
      <div className={c.actions}>
        <button type="submit" className={c.apply}>
          Apply
        </button>
        <button
          type="reset"
          onClick={() => {
            setFilterValues([])
            capture(TYPES.CLICK, { type: 'Clear all filters' })
          }}
        >
          Clear all filters
        </button>
      </div>
    </form>
  )
}

export default FilterForm
