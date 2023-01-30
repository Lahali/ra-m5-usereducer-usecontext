import React from 'react'
import styled from 'styled-components'
import RowsPerPage from './RowsPerPage'
import TablePagination from './TablePagination'

const TableFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`

function TableFooter() {
  return (
    // Convierte el tfoot en un div, al cargar HTML dentro de un td, salta error de HTML
    // Además te ahorras los <td /> vacios
    <TableFooterStyled>
      <TablePagination />
      <RowsPerPage />
    </TableFooterStyled>
  )
}

export default TableFooter
