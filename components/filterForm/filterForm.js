import c from './filterForm.module.css'

const FilterForm = ({ formConfig, setFilterValues }) => {
  const onFormSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())

    setFilterValues(fieldValues)
  }
  return (
    <form onSubmit={onFormSubmit}>
      {formConfig.fields.map(({ Component, ...field }) => (
        <div key={field.id}>
          <label className={c.label} htmlFor={field.id}>
            {field.label}
          </label>
          <Component name={field.name} id={field.id} type={field.type} />
        </div>
      ))}

      <hr className={c.divider} />
      <button type="submit">Apply</button>
      <button onClick={() => setFilterValues([])}>Clear all filters</button>
    </form>
  )
}

export default FilterForm
