import styled from 'styled-components'

export const SubTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align:center;
    line-height: 28px;

    @media (min-width: 550px) {
        font-size: 1.8rem;
    }
`

export const SubTitleH3 = styled(SubTitle)`
    font-size: 1.1rem;
    line-height: 18px;
`