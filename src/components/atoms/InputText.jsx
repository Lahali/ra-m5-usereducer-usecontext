import PropTypes from 'prop-types'
import styled from 'styled-components'

function InputText({ id, onChange, ...rest }) {
  return <input type="text" id={id} name={id} onChange={onChange} {...rest} />
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default styled(InputText)``
