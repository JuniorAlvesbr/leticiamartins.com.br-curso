import { useState, useEffect } from 'react'
import { WhatsAppIcon, WhatsAppLink } from './styles'

const whatsData = {
  phone: "5544998138138",
  space: "%20",
  message: ['Oi Leticia. Vi as informações do curso online, mas ainda tenho algumas dúvidas. Pode me ajudar?']
}

const message = whatsData.message.join(`${whatsData.space}`)

const link = `https://api.whatsapp.com/send?phone=${whatsData.phone}&text=${message}`

export default function WhatsAppButton() {
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY > 400) {
        setShowWhatsApp(true)
        return
      }

      setShowWhatsApp(false)
    })
  })

  return (
    <>
      {showWhatsApp && (
        <WhatsAppLink href={link} target="_blank">
          <WhatsAppIcon />
        </WhatsAppLink>
      )}
    </>
  )
}