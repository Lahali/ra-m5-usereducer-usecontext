import styled from 'styled-components'
import dimensions from './dimensions'

const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gridGap }) => gridGap || dimensions.spacing.medium};
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || 'auto auto auto'};
`
export default Grid
