import styled from 'styled-components'
import { IconWrapper } from './Image'

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 40px 0;
`

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`

export const Title = styled.h1`
    font-size: 1.4rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    width: 80vw;
    max-width: 360px;
    padding: 20px 0;

    & > em {
        color: ${({ theme }) => theme.colors.third}
    }

    @media (min-width: 600px) {
        font-size: 1.4rem;
        max-width: 600px;
    }

    @media (min-width: 1024px) {
        font-size: 1.6rem;
        max-width: 900px;
    }

    @media (min-width: 1366px) {
        max-width: 1024px;
    }

`

export const Text = styled(Title)``

export const Legend = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`

export const Description = styled(Title)`
    font-size: 1.1rem;
    line-height: 1.4;
    text-transform: none;
    width: 95vw;

    & > em {
        font-style: italic;
    }

    @media (min-width: 600px) {
        font-size: 1.2rem;
    }
    
    @media (min-width: 1024px) {
        font-size: 1.4rem;
    }
    
`

export const PlayerWrapper = styled.div`
    position: relative;
    width: 310px;
    border-radius: 1px solid green;

    @media (min-width: 370px) {
        width: 370px;
        height: 220px;
    }

    @media (min-width: 420px) {
        width: 414px;
    }

    @media (min-width: 500px) {
        width: 490px;
        height: 400px;
    }

    @media (min-width: 768px) {
        width: 600px;
    }
   
    @media (min-width: 1024px) {
        width: 800px;
    }

    @media (min-width: 1366px) {
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