import styled from 'styled-components'
import { IconWrapper, ImageWrapper } from './Image'
import { Description, Legend, Text } from './Text'
import Button from '../../object/Button'

export const Container = styled.section`
    position: relative;
    height: 1150px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 21.63%, #000000 33.21%);
    }

    > ${ImageWrapper} {
        height: 400px;
    }

   @media (min-width: 750px) {
        height: 850px;
        
        &::after {
            background: radial-gradient(100% 505.77% at 0% 45.98%, rgba(0, 0, 0, 0.9) 35.94%, rgba(0, 0, 0, 0) 71.88%);
        }

        > ${ImageWrapper} {
            height: 850px;
        }
    }

    @media (min-width: 1000px) {
        height: 950px;

        > ${ImageWrapper} {
            height: 950px;
        }
    }
`

export const Content = styled.article`
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;

    > ${Button} {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    > ${Text} {
        width: 240px;
    }

    > ${Legend} {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    > ${Description} {
        font-size: 1.2rem;
        width: 290px;
    }

    @media (min-width: 500px) {
        font-size: 1.7rem;

        > ${Text} {
            width: 316px;
        }

        > ${Description} {
            font-size: 1.4rem;
            width: 500px;
        }
    }

    @media (min-width: 750px) {
        width: 500px;
        top: 0;
        margin-top: 40px;
        margin-left: 58px;

        > ${Description} {
            line-height: 34px;
        }
    }

    @media (min-width: 1000px) {
        width: 610px;
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
        width: 450px;
        height: 280px;
    }

    @media (min-width: 1000px) {
        width: 600px;
        height: 350px;
    }
`

export const IconContent = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;

    > ${IconWrapper} {
        width: 60px;
        height: 60px;
        z-index: 10;
    }
`