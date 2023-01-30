import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { Button, Icon } from '../../atoms'
import { TableCell } from './styles'

function TablePagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, pageRows } = state.pagination

  const totalPages = Math.ceil(state.data.length / pageRows)

  const handlePrev = () => {
    if (currentPage < 1) return
    if (currentPage >= totalPages) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage - 1 })
    }
  }

  // Lo tienes qu revisar, actualmente no funciona
  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch({
        type: 'SET_CURRENT_PAGE',
        payload: currentPage + 1,
      })
    }
  }

  console.log(totalPages)

  return (
    <TableCell border="none">
      <Button
        backgroundColor="transparent"
        color="gray"
        shadow="none"
        onClick={handlePrev}
      >
        <Icon icon="arrow_back_ios" />
      </Button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <Button
        backgroundColor="transparent"
        color="gray"
        shadow="none"
        onClick={handleNext}
      >
        <Icon icon="arrow_forward_ios" />
      </Button>
    </TableCell>
  )
}

export default TablePagination
