import React, { useContext } from 'react'
import { Select, SelectOption } from '../../atoms'
import { TableContext } from './store/context'

const options = [
  { id: 1, value: 10, label: 10 },
  { id: 2, value: 25, label: 25 },
  { id: 3, value: 50, label: 50 },
]

function RowsPerPage() {
  const { state, dispatch } = useContext(TableContext)
  const { pageRows } = state.pagination

  const handleSelectRows = (e) => {
    dispatch({
      type: 'SET_PAGE_ROWS',
      payload: Number(e.target.value),
    })
  }

  return (
    <div style={{ padding: '1rem' }}>
      <span style={{ margin: '1rem' }}>Mostrar</span>
      <Select
        id="select"
        name="select"
        onChange={handleSelectRows}
        value={pageRows}
      >
        {options.map((option) => (
          <SelectOption key={option.id}>{option.label}</SelectOption>
        ))}
      </Select>
    </div>
  )
}

export default RowsPerPage
