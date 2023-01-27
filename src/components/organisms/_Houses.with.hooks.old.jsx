import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { useFetch } from '../../hooks'
import { FlexBox, Grid } from '../../styles'
import { urls } from '../../constants'

const HousesStyled = styled(FlexBox)``

const getUrl = (page) => `${urls.houses}?_page=${page}&_limit=9`

function Houses() {
  const [houses, setHouses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, isError, isSuccess, hasData } = useFetch(
    getUrl(currentPage),
  )
  useEffect(() => {
    if (!data) return
    setHouses((prevData) => [...prevData, ...data])
  }, [data])

  return (
    <HousesStyled>
      {loading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <Grid gridGap="32px">
          {houses.map((house) => (
            <HouseCard
              key={house.id}
              title={house.title}
              price={`${house.price}€`}
              img={house.image}
              link=""
            />
          ))}
        </Grid>
      )}
      {hasData && (
        <FlexBox align="center">
          <Button
            style={{ marginTop: '2rem' }}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Load more
          </Button>
        </FlexBox>
      )}
    </HousesStyled>
  )
}

export default styled(Houses)``
