import Hero from "../components/Hero"
import CourseContent from "../components/CourseContent"
import WhoisCourse from "../components/WhoisCourse"
import AboutMe from "../components/AboutMe"
import Bonus from "../components/Bonus"
import Device from "../components/Device"
import Price from "../components/Price"
import Garantia from "../components/Garantia"
import Questions from "../components/Questions"
import LastWorks from "../components/LastWorks"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <WhoisCourse />
        <LastWorks />
        <CourseContent />
        <AboutMe />
        <Bonus />
        <Device />
        <Price />
        <Garantia />
        <Questions />
      </main>
      <footer>
        <Footer>
          Todos os direitos reservados por - Leticia Martins - Personal Organizer
        </Footer>
      </footer>
    </>
  )
}

export default Home