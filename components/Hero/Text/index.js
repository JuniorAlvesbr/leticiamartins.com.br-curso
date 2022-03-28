import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    
    > span {
        color: ${({ theme }) => theme.colors.third};
        text-transform: uppercase;
    }
`

export const Text = styled.p`
    font-size: 1.5rem;
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
    font-size: 1.2rem;
    text-transform: none;
    line-height: 2;
`