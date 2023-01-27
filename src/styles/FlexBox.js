import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-grow: ${({ grow }) => grow || 0};
  flex-wrap: ${({ flex }) => flex || 'no-wrap'};
  width: ${({ w }) => w || '100%'};
  margin-top: ${({ marginTop }) => marginTop || 'none'};
`

export default FlexBox
