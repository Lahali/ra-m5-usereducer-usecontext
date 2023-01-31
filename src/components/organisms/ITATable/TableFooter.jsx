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
    <TableFooterStyled>
      <TablePagination />
      <RowsPerPage />
    </TableFooterStyled>
  )
}

export default TableFooter
