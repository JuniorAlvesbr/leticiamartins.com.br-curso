import Hero from "../components/Hero"
import CourseContent from "../components/CourseContent"
import WhoisCourse from "../components/WhoisCourse"
import AboutMe from "../components/AboutMe"

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
      </main>
    </>
  )
}

export default Home