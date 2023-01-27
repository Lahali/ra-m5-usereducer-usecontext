import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, Select, SelectOption } from '../atoms'

const SelectGroupStyled = styled.div``

function SelectGroup({
  label,
  id,
  onChange,
  options = [],
  defaultValue = '',
  defaultText = '',
  hideLabel = false,
  ...rest
}) {
  return (
    <SelectGroupStyled>
      <Label htmlFor={id} hideLabel={hideLabel}>
        {label}
      </Label>
      <Select
        id={id}
        name={id}
        onChange={onChange}
        {...rest}
        defaultValue={defaultValue}
      >
        <SelectOption value="" disabled>
          {defaultText}
        </SelectOption>
        {options.map((option) => (
          <SelectOption value={option.value} key={option.value}>
            {option.text}
          </SelectOption>
        ))}
      </Select>
    </SelectGroupStyled>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  defaultValue: PropTypes.string,
  defaultText: PropTypes.string,
  hideLabel: PropTypes.bool,
}

export default styled(SelectGroup)``
