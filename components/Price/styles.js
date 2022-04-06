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
            font-size: 4rem;
        }

        span {
            text-transform: uppercase;
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
                font-size: 5.5rem;
            }
        }
    }

`