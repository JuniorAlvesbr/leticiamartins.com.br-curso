import { WhatsAppIcon, WhatsAppLink } from './styles'

const whatsData = {
  phone: "5544998138138",
  space: "%20",
  message: function () {
    return (
      `Oii${this.space}Leticia,${this.space}tudo${this.space}bem?${this.space}gostaria${this.space}de${this.space}saber${this.space}sobre${this.space}seu${this.space}trabalho${this.space}de...`
    )
  }
}

const link = `https://api.whatsapp.com/send?phone=${whatsData.phone}&text=${whatsData.message}`

export default function WhatsAppButton() {
  return (
    <WhatsAppLink href={link} target="_blank">
      <WhatsAppIcon />
    </WhatsAppLink>
  )
}