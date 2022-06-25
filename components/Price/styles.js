import styled from 'styled-components'
import { Button, SubTitle, Text } from '../../object'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;

    ${SubTitle} {
        font-size: 1.6rem;
        text-align: center;
    }
    
    ${Text} {
        font-size: 1.2rem;
        position: relative;
        padding: 10px;
        text-align: center;

        em {
            position: absolute;
            left: -15px;
        }

        strong {
            font-size: 6rem;
            color: #079130;

            & > span {
                font-size: 4rem;
                position: absolute;
            }
        }

        span {
            text-transform: uppercase;
        }

        s {
            text-decoration: line-through;
        }
    }
    
    @media (min-width: 700px) {
        & > ${SubTitle} {
            font-size: 2.5rem;
            line-height: 40px;
        }

        & > ${Text} {

            strong {
                font-size: 10rem;
            }
        }
    }

`

export const Description = styled.p`
    font-weight: 700;
    text-align: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    line-height: 1.4;
    max-width: 320px;

    strong {
        color: #079130;
    }
`