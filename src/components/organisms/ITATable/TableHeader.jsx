import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, sortedBy, sortDirection } = state

  const handleSort = (column) => {
    dispatch({
      type: 'SET_TABLE_SORTED',
      payload: {
        columnId: column.id,
        sortedBy,
        sortDirection,
      },
    })
  }

  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} onClick={() => handleSort(col)}>
              {col.label}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
