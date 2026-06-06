import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Music from '@/components/Music'
import Gallery from '@/components/Gallery'
import Events from '@/components/Events'
import Press from '@/components/Press'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Events />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
