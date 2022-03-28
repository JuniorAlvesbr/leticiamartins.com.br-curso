import styled from 'styled-components'
import { IconWrapper, ImageWrapper } from './Image'
import { Description, Legend, Text } from './Text'
import Button from '../Button'

export const Container = styled.section`
    position: relative;
    height: 1142px;

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

`

export const Content = styled.article`
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > ${Button} {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    > ${Text} {
        width: 240px;
    }

    > ${Legend} {
        margin-bottom: 10px;
    }

    > ${Description} {
        width: 290px;
    }
`

export const PlayerWrapper = styled.div`
    position: relative;
    height: 260px;
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