import React, { useContext } from 'react'
import { Select, SelectOption } from '../../atoms'
import { TableContext } from './store/context'
import { TableCell } from './styles'

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
    <TableCell border="none">
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
    </TableCell>
  )
}

export default RowsPerPage
