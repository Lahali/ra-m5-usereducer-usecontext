import styled, { keyframes } from 'styled-components'

export const TableCell = styled.td`
  justify-content: center;
  align-items: center;
  border: ${({ border }) => border || '1px solid'};
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`

export const ButtonsDivStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
  direction: row;
  justify-content: flex-end;
`

export const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spinner} 0.6s linear infinite;
`
