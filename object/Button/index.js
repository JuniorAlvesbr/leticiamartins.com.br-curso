import styled from 'styled-components'

const Button = styled.a.attrs({
    href: "https://pay.hotmart.com/N69221252K?bid=1651088642711",
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
    box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

`

export default Button;