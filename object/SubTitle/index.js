import styled from 'styled-components'

export const SubTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: ${({ as }) => as === "h3" ? '18px' : '28px'};

    & > em {
        color: ${({ theme }) => theme.colors.third};
    }

    @media (min-width: 550px) {
        font-size: 1.8rem;
    }
`