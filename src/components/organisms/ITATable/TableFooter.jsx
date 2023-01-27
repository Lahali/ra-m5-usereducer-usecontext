import React from 'react'
import RowsPerPage from './RowsPerPage'
import TablePagination from './TablePagination'

function TableFooter() {
  return (
    <tfoot>
      <tr>
        <TablePagination />
        <td />
        <td />
        <td />
        <RowsPerPage />
      </tr>
    </tfoot>
  )
}

export default TableFooter
