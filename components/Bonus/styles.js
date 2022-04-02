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
    flex-wrap: wrap;
    justify-content: center;

    ${SubTitle} {
        max-width: 170px;
        text-align: center;
        margin: 24px 0;
    }
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Item = styled.li`
    background-color: ${({ theme }) => theme.colors.third};
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 200px;
    padding: 10px;
    line-height: 21px;
    border-radius: 10px;

    ${IconFactCheck}, ${IconSafety}, ${IconChat}, ${IconCertificate} {
        color: ${({ theme }) => theme.colors.primary}; 
        font-size: 3rem;
        
    }

    & > em {
        color: ${({ theme }) => theme.colors.primary};
    }
`