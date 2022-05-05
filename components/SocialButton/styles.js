import styled from 'styled-components'
import { ImFacebook2 } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { BsArrowUpSquareFill } from 'react-icons/bs'

export const Link = styled.a.attrs({
    target: "_blank",
    rel: "noreferrer noopener"
})``

export const FacebookIcon = styled(ImFacebook2)``

export const InstagramIcon = styled(GrInstagram)``

export const ToTop = styled(BsArrowUpSquareFill)``

export const Wrapper = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: opacity 200ms ease-in;
    opacity: ${({ active }) => active ? 1 : 0};

    ${FacebookIcon}, ${InstagramIcon}, ${ToTop} {
        font-size: 30px;

        &:hover, &:focus {
            transform: translateY(-2px);
        }

        &:focus {
            border: 2px solid #0d6efd;
        }
    }

    ${FacebookIcon}, ${ToTop} {
        color: #1877f2;
    }

    ${InstagramIcon} {
        color: #833AB4;
    }
`

