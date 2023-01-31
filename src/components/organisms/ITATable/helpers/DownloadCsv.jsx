import React from 'react'
import PropTypes from 'prop-types'
import { CSVLink } from 'react-csv'
import { Icon, Button } from '../../../atoms'

function DownloadCsv({ data }) {
  return (
    <Button marginLeft="1rem" backgroundColor="green">
      <CSVLink data={data} style={{ color: 'white', textDecoration: 'none' }}>
        <Icon icon="download" />
        Descargar
      </CSVLink>
    </Button>
  )
}

DownloadCsv.propTypes = {
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
}

export default DownloadCsv
