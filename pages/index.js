import Hero from "../components/Hero"
import CourseContent from "../components/CourseContent"
import WhoisCourse from "../components/WhoisCourse"
import AboutMe from "../components/AboutMe"
import Bonus from "../components/Bonus"
import Device from "../components/Device"
import Price from "../components/Price"
import Garantia from "../components/Garantia"
import Questions from "../components/Questions"

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
      </main>
    </>
  )
}

export default Home