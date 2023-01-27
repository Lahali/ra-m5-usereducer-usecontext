import { useEffect, useContext } from 'react'
import { colors } from '../../../styles'
import { Button } from '../../atoms'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled, ButtonsDivStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import TablePagination from './TablePagination'

function Table({ columns, data, showHeader = true, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    dispatch({
      type: Actions.SET_PAGINATION,
      payload: {
        currentPage: 1,
        pageRows: 10,
      },
    })
  }, [data, columns, dispatch])

  return (
    <div>
      <ButtonsDivStyled>
        <Button backgroundColor={colors.blue} marginLeft="1rem">
          Viviendas
        </Button>
        <Button backgroundColor="white" color={colors.shadow} marginLeft="1rem">
          Por barrio
        </Button>
        <Button marginLeft="1rem" backgroundColor="green">
          Descargar
        </Button>
      </ButtonsDivStyled>
      {loading ? (
        <p>estoy cargando</p>
      ) : (
        <TableStyled>
          {showHeader && <TableHeader />}
          <TableBody />
          <TablePagination />
        </TableStyled>
      )}
    </div>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
