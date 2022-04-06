import styled from 'styled-components'
import { ImageWrapper, Image } from '../../object'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.third};

    & > ${ImageWrapper} {
        width: 80vw;
        height: 80vw;
        max-width: 700px;
        max-height: 700px;

        ${Image} {
            object-fit: contain;
        }
    }
`