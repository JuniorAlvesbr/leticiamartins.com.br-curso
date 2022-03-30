import styled from 'styled-components'

const Button = styled.a.attrs({
    href: "http://www.google.com.br",
    rel: "noopener noreferrer",
})`
    width: 286px;
    height: 46px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    line-height: 46px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.third};
    cursor: pointer;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

`

export default Button;