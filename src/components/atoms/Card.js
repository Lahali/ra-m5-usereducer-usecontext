import styled from 'styled-components'
import { colors, FlexBox, dimensions } from '../../styles'

const Card = styled(FlexBox)`
  border-radius: ${(props) =>
    props.borderRadius || dimensions.borderRadius.base};
  box-shadow: ${(props) => props.boxShadow || colors.shadow.base};
`

export default Card
