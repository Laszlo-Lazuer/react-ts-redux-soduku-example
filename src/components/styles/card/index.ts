import styled, { css } from 'styled-components'
// import { theme } from '../../../styles'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flexex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`
