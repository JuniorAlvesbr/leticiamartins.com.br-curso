import styled from 'styled-components'
import { SubTitle } from '../../object/SubTitle'
import { BlackLine } from '../../object/Line'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    > ${SubTitle} {
        width: 156px;
        margin-top: 20px;
    }

    @media (min-width: 550px) {
        > ${SubTitle} {
            width: 100%;
            margin-top: 20px;
        }

        > ${BlackLine} {
            margin-bottom: 40px;
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 12px;
`