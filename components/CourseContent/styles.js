import styled from 'styled-components'
import { SubTitle, BlackLine, Text } from '../../object'
import Button from '../../object/Button'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 50px;

    > ${SubTitle} {
        width: 180px;
        margin-top: 20px;
        text-align: center;
        line-height: 26px;
    }

    ${Text} {
        font-size: 18px;
        text-transform: uppercase;
    }

    > ${Button} {
        position: absolute;
        bottom: -23px;
        z-index: 10;
    }

    @media (min-width: 550px) {
        > ${SubTitle} {
            width: 100%;
            margin-top: 36px;
        }

        > ${Text} {
        margin-top: 12px;
        margin-bottom: 30px;
    }
    }
`

export const CardGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    max-width: 1300px;
`

export const BonusContent = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`