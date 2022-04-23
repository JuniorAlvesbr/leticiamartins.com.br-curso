import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'

export const Icon = styled(FaArrowUp)`
    font-size: 20px;
    color: #ffffff;
`
export const Button = styled.button`
    background-color: #000000;
    border: none;
    cursor: pointer;
    transition: transform 200ms ease-in;
    padding: 5px 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    transition: opacity 200ms ease-in;
    opacity: ${({ active }) => active ? 1 : 0};


    &:hover, &:focus {
        transform: translateY(-2px);
    }

    &:focus {
        border: 2px solid #0d6efd;
    }
`
