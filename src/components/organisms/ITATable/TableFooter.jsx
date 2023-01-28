import React from 'react'
import RowsPerPage from './RowsPerPage'
import TablePagination from './TablePagination'

function TableFooter() {
  return (
    // Convierte el tfoot en un div, al cargar HTML dentro de un td, salta error de HTML
    // Además te ahorras los <td /> vacios
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
