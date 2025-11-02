import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import WhyHappyAI from '@/components/WhyHappyAI'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Services />
      <WhyHappyAI />
      <Projects />
      <Footer />
    </main>
  )
}
