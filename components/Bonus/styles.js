import styled from 'styled-components'
import { MdFactCheck } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { SubTitle } from '../../object/SubTitle'

export const IconFactCheck = styled(MdFactCheck)``
export const IconSafety = styled(AiOutlineSafetyCertificate)``
export const IconChat = styled(BsChatLeftText)``
export const IconCertificate = styled(FaAward)``

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${SubTitle} {
        max-width: 300px;
        text-align: center;
        margin: 24px 0;
    }

    @media (min-width: 600px) {
        ${SubTitle} {
            max-width: 400px;
        }
    }
`

export const Text = styled.p`
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    line-height: 21px;
    margin-top: 20px;

    & > em {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 600px;

    @media (min-width: 1100px) {
        max-width: 1200px;
    }
`

export const Item = styled.li`
    width: 250px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.third};
    border-radius: 10px;
    padding: 10px;
    margin: 14px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-top: 10px;
    }

    ${IconFactCheck}, ${IconSafety}, ${IconChat}, ${IconCertificate} {
        color: ${({ theme }) => theme.colors.primary}; 
        font-size: 3rem 
    }
`