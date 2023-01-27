import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { FlexBox, Grid } from '../../styles'
import { getHouses } from '../../store/houses.slice'
import { filterBy } from '../../helpers'

const HousesStyled = styled(FlexBox)``

function Houses() {
  const [currentPage, setCurrentPage] = useState(1)
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { isError, isSuccess, isLoading, hasData } = reqStatus
  const { byId, allIds, selectedCity, selectedType } = houses
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouses(currentPage))
  }, [currentPage, dispatch])

  return (
    <HousesStyled>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <Grid gridGap="32px">
          {allIds
            .filter((id) => filterBy(byId[id], selectedCity, selectedType))
            .map((id) => (
              <HouseCard
                key={id}
                title={byId[id].title}
                price={`${byId[id].price}€`}
                img={byId[id].image}
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
