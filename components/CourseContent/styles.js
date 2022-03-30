import styled from 'styled-components'
import { SubTitle, Title } from '../../object/SubTitle'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    > ${SubTitle} {
        width: 156px;
        margin-top: 12px;
    }
`

export const CardGrid = styled.div`
    display: grid;
    row-gap: 20px;
`

export const BonusContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`