import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, Container, dimensions, FlexBox } from '../../styles'
import { Card, Title, Text, Button } from '../atoms'

const HouseCardStyled = styled(Card)`
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${dimensions.borderRadius.base};
    height: 200px;
    object-fit: cover;
    width: 100%;
  }

  ${Title} {
    font-size: ${dimensions.font.base} !important;
    font-weight: normal;
  }
`

function HouseCard({ title, link, price, img, ...rest }) {
  return (
    <HouseCardStyled {...rest}>
      <img src={img} alt={title} />
      <Container px={dimensions.spacing.base}>
        <Title order={3} color={colors.font.base}>
          {title}
        </Title>
        <FlexBox direction="row" justify="space-between" align="center">
          <Text style={{ fontWeight: 'bold' }}>{price}</Text>
          <Button href={link}>Localizar</Button>
        </FlexBox>
      </Container>
    </HouseCardStyled>
  )
}

HouseCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default styled(HouseCard)``
