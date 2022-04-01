import styled from 'styled-components'
import { FaUserFriends } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.fourth};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const UsersIcon = styled(FaUserFriends)`
    font-size: 6rem;
`

export const CheckIcon = styled(BsCheck2Circle)`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.third};
`

export const List = styled.ul`
    margin-top : 34px;
`


export const Item = styled.li`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    > span {
        display: inline-block;
        max-width: 280px;
        margin-left: 14px;
    }
`

export const TextContent = styled.div`
    margin-top: 34px;
`

export const Text = styled.p`
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    line-height: 20px;
    margin-bottom: 24px;
    width: 320px;
` 