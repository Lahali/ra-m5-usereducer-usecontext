import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { urls } from '../constants'
import useFetch from '../hooks/useFetch'
import { Container } from '../styles'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span
        style={{
          color:
            // eslint-disable-next-line no-nested-ternary
            row.price > 500000 ? 'red' : row.price < 250000 ? 'green' : 'black',
        }}
      >
        {row.price} €
      </span>
    ),
  },
  {
    id: 'district',
    label: 'Barrio',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
]

function Data() {
  const { data, loading } = useFetch(urls.houses)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} loading={loading} />
      </Container>
    </Body>
  )
}

export default Data
