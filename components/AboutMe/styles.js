import styled from 'styled-components'
import ImageNext from 'next/image'
import { SubTitle } from '../../object/SubTitle'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #BF6D8D 9.84%, #000000 42.24%);
    border-top: 5px solid #000000;

    ${SubTitle} {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 46px;
        text-align: center;
    }

    @media (min-width: 750px) {
        flex-direction: row;
        justify-content: center;
        background: linear-gradient(180deg, #BF6D8D 9.84%, #000000 66.24%);
        padding: 20px;

        ${SubTitle} {
            text-align: left;
        }
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;

    @media (min-width: 750px) {
        width: 400px;
        height: 400px;
    }
`

export const Image = styled(ImageNext)`
    object-fit: contain;
`

export const Content = styled.article`
    width: 70vw;
    max-width: 1200px;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-bottom: 24px;

    > em {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.third}
    }

    @media (min-width: 750px) {
        text-align: left;
        font-size: 1.2rem;
        padding-right: 80px;
    }

    @media (min-width: 1366px) {
        font-size: 1.3rem;
    }
   
`