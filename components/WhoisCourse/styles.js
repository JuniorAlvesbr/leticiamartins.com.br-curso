import styled from 'styled-components'
import { FaUserFriends } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"
import { SubTitle } from '../../object/SubTitle'

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.fourth};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0 30px;

    ${SubTitle} {
        text-align: center;
        max-width: 400px;
    }
`

export const UsersIcon = styled(FaUserFriends)`
    font-size: 6rem;
`

export const CheckIcon = styled(BsCheck2Circle)`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.third};
`

export const Content = styled.article`
    margin-top : 34px;
    width: 90vw;
    max-width: 1000px
`

export const List = styled.ul``

export const Item = styled.li`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    > span {
        display: inline-block;
        margin-left: 14px;
        width: 90vw;
    }

    @media (min-width: 800px) {
        font-size: 1.6rem;
    }
`

export const TextContent = styled.div`
    margin-top: 54px;
`

export const Text = styled.p`
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    line-height: 20px;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        font-size: 1.2rem;
    }
`