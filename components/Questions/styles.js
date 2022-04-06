import styled from 'styled-components'
import { Name, Text } from '../../object'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 26px 0; 

    ${Name} {
        font-size: 2.5rem;
    }

    ${Text} {
        color: ${({ theme }) => theme.colors.third};
        font-size: 1.2rem;
    }
`

export const Tab = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

export const Label = styled.label`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-weight: 700;
    line-height: 18px;
    background-color: ${({ theme }) => theme.colors.fourth};
    cursor: pointer;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.third};
    }

    &::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all .35s;
    }
`

export const TabContent = styled.div`
    font-style: italic;
    line-height: 20px;
    font-weight: 300;
    text-align: center;
    max-height: 0;
    padding: 0 1em;
    background-color: ${({ theme }) => theme.colors.fourth};
    transition: all .35s;
`

export const Content = styled.div`
    padding: 2rem;
    max-width: 700px;

    ${Input}:checked {
        + ${Label} {
            background-color: ${({ theme }) => theme.colors.third};

            &::after {
                transform: rotate(90deg);
            }
        }
        ~ ${TabContent} {
            max-height: 100vh;
            padding: 1em;
        }
    }
`

