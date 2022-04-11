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

function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <CourseContent />
        <WhoisCourse />
        <AboutMe />
        <Bonus />
        <Device />
        <Price />
        <Garantia />
        <Questions />
        <LastWorks />
      </main>
    </>
  )
}

// Teste de git 
export default Home