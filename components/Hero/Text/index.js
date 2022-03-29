import styled from 'styled-components'

export const Title = styled.h1`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    
    > span {
        color: ${({ theme }) => theme.colors.third};
        text-transform: uppercase;
    }
`

export const Text = styled.p`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    line-height: 1.2;
    text-transform: uppercase;

    > em {
        color: ${({ theme }) => theme.colors.third}
    }
`

export const Legend = styled.p`
    color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled(Text)`
    text-transform: none;
    line-height: 2;
`