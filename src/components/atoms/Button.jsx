import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const { spacing, borderRadius } = dimensions

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.purple};
  color: ${({ color }) => color || 'white'};
  border-radius: ${borderRadius.base};
  border: ${({ border }) => border || 0};
  padding: ${spacing.xs} ${spacing.base};
  box-shadow: ${({ shadow }) => shadow || colors.shadow.base};
  margin-left: ${({ marginLeft }) => marginLeft || '0'};
  visibility: ${({ visibility }) => visibility || 'visible'};

  &:hover {
    cursor: pointer;
  }
`

function Button({ children, type = 'button', ...rest }) {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

export default styled(Button)``
