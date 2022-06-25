import styled from 'styled-components'

export const Line = styled.hr`
    width: 180px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 10px 0;
`

export const BlackLine = styled(Line)`
    background-color: ${({ theme }) => theme.colors.secondary};
`