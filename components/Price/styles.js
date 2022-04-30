import styled from 'styled-components'
import { Button, SubTitle, Text } from '../../object'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 290px;

    & > ${SubTitle}, ${Text} {
        text-align: center;
    }

    & > ${Text} {
        font-size: 1.2rem;
        position: relative;
        padding: 10px;

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
        height: 400px;

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