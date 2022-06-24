import styled from 'styled-components'
import { ImageWrapper, Image } from '../../object'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.third};
    height: 40vh;
    padding: 10px;

    & > ${ImageWrapper} {
        width: 350px;
        height: 250px;
    }

    @media (min-width: 768px) {
        height: 60vh;

        & > ${ImageWrapper} {
        width: 500px;
        height: 300px;
        }
    }

    @media (min-width: 1024px) {
        height: 80vh;

        & > ${ImageWrapper} {
        width: 700px;
        height: 500px;
        }
    }

    @media (min-width: 1366px) {
        & > ${ImageWrapper} {
        width: 1024px;
        height: 700px;
        }
    }
`