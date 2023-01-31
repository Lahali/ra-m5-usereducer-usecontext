import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../styles'
import { Button } from '../../atoms'
import DownloadCsv from './helpers/DownloadCsv'
import { Actions } from './store/reducer'
import { TableStyled, ButtonsDivStyled, TableCell, Loader } from './styles'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import { TableContext } from './store/context'
import { CSVLink } from 'react-csv'

function Table({ columns, data, showHeader = true, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <div>
      <CSVLink data={data}>holis</CSVLink>
      <ButtonsDivStyled>
        <Button backgroundColor={colors.blue} marginLeft="1rem">
          Viviendas
        </Button>
        <Button backgroundColor="white" color={colors.shadow} marginLeft="1rem">
          Por barrio
        </Button>
        <DownloadCsv data={data} />
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
        <>
          <TableStyled>
            {showHeader && <TableHeader />}
            <TableBody />
          </TableStyled>
          <TableFooter />
        </>
      )}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      cell: PropTypes.func,
    }),
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      city: PropTypes.string,
      createdAt: PropTypes.string,
      published: PropTypes.bool,
      updatedAt: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  showHeader: PropTypes.bool,
  loading: PropTypes.bool,
}

export default Table
