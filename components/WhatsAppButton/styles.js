import styled from 'styled-components'
import { BsWhatsapp } from "react-icons/bs"

export const WhatsAppIcon = styled(BsWhatsapp)`
  color: #ffffff;
  font-size: 30px;
  `

export const WhatsAppLink = styled.a.attrs({
  rel: "noopener noreferrer"
})`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #4dc247;
  padding: 12px;
  border-radius: 50%;
`