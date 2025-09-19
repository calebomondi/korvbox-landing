import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Hero from "../components/body/hero"
import TrustedBy from "../components/body/trusted"
import Benefits from "../components/body/benefits"
import HowItWorks from "../components/body/howitworks"
import Morpho from "../components/body/morpho"
import FAQ from "../components/body/faq"
import FinalCall from "../components/body/finalcall"

export default function HomePage() {
    
  return (
    <div className="">
      <Navbar />
      <main className="">
          <Hero />
          <TrustedBy />
          <Benefits />
          <HowItWorks />
          <Morpho />
          <FAQ />
          <FinalCall />
      </main>
      <Footer />
    </div>
  )
}
