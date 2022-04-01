import Hero from "../components/Hero"
import CourseContent from "../components/CourseContent"
import WhoisCourse from "../components/WhoisCourse"

function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <CourseContent />
        <WhoisCourse />
      </main>
    </>
  )
}

export default Home