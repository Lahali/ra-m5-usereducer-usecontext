import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputNumber, Label } from '../atoms'

function InputNumberGroup({ label, id, onChange, ...rest }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputNumber id={id} name={id} onChange={onChange} {...rest} />
    </div>
  )
}

InputNumberGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default styled(InputNumberGroup)``
