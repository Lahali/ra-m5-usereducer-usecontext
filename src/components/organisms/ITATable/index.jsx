import { useEffect, useContext } from 'react'
import { colors } from '../../../styles'
import { Button, Icon } from '../../atoms'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled, ButtonsDivStyled, TableCell, Loader } from './styles'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

// Aquí utilizaria prop-types
function Table({ columns, data, showHeader = true, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    // Este dispatch sobra, puede ser un valor por defecto.
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
          <Icon icon="download" /> Descargar
        </Button>
      </ButtonsDivStyled>
      {loading ? (
        <TableStyled>
          <TableHeader />
          <tbody>
            <tr>
              <TableCell>
                <Loader />
              </TableCell>
            </tr>
          </tbody>
        </TableStyled>
      ) : (
        <TableStyled>
          {showHeader && <TableHeader />}
          <TableBody />
          <TableFooter />
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
