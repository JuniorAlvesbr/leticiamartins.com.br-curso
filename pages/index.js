import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Container>
      <Image
        src="/images/manutencao.webp"
        alt="Picture of the author"
        width={700}
        height={500}
      />
    </Container>
  )
}