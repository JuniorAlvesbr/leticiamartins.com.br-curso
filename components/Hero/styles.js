import styled from 'styled-components'
import { IconWrapper } from './Image'
import Button from '../../object/Button'

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.h1`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    text-transform: uppercase;
    line-height: 1.2;
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

export const Content = styled.article`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 95vh;

    ${Title} {
        max-width: 800px;
    }

    > ${Legend} {
        font-size: 1rem;
        max-width: 800px;
    }

    > ${Description} {
        font-size: 1.2rem;
        max-width: 800px;
    }

    > ${Button} {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 500px) {
        font-size: 1.7rem;

        > ${Description} {
            font-size: 1.4rem;
        }
    }

    @media (min-width: 750px) {
        > ${Description} {
            line-height: 34px;
        }
    }

    @media (min-width: 1366px) {
        >${Title} {
            max-width: 100%;
        }
    }
`

export const PlayerWrapper = styled.div`
    position: relative;
    width: 290px;

    @media (min-width: 350px) {
        width: 340px;
        height: 220px;
    }


    @media (min-width: 500px) {
        width: 490px;
        height: 400px;
    }

    @media (min-width: 1366px) {
        width: 700px;
    }
`

export const IconContent = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    > ${IconWrapper} {
        width: 60px;
        height: 60px;
        z-index: 10;
    }
`