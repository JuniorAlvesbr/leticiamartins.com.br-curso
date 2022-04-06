import styled from 'styled-components'
import { Image, ImageWrapper, SubTitle, Text } from '../../object'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #100E12;
    padding: 20px 0;

    & > ${ImageWrapper} {
        width: 200px;
        height: 210px;

        ${Image} {
            object-fit: contain;
        }
    }

    @media (min-width: 550px){
        flex-direction: row;
    }

    @media (min-width: 800px){
        & > ${ImageWrapper} {
            width: 400px;
            height: 410px;
        }
    }
`

export const TextBox = styled.article`
    ${SubTitle}, ${Text} {
        color: ${({ theme }) => theme.colors.primary};
        line-height: 28px;
        text-align: center;
        padding: 20px;
        max-width: 400px;
    }

    ${SubTitle} {
        font-size: 1.4rem;
    }

    & > ${Text} {

        strong {
            text-transform: uppercase;
        }
    }

    @media (min-width: 550px){
        ${SubTitle}, ${Text} {
            text-align: left;
            padding-right: 0;
        }
    }

    @media (min-width: 800px){

        & > ${SubTitle} {
            font-size: 1.8rem;
        }

        & > ${Text} {
            font-size: 1.4rem;
            max-width: 800px;
        }
    }
` 