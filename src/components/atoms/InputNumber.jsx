import PropTypes from 'prop-types'
import styled from 'styled-components'

function InputNumber({ id, onChange, ...rest }) {
  return <input type="number" id={id} name={id} onChange={onChange} {...rest} />
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default styled(InputNumber)``
