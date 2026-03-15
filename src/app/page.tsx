import Hero from '@/components/sections/Hero'
import Menu from '@/components/sections/Menu'
import Gallery from '@/components/sections/Gallery'
import About from '@/components/sections/About'
import Reviews from '@/components/sections/Reviews'
import PatioRent from '@/components/sections/PatioRent'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Reviews />
      <PatioRent />
      <Contact />
      <Footer />
    </main>
  )
}
