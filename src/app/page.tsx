
import HeroSection from "@/components/sections/hero/hero";
import Footer from "@/components/sections/footer/footer";
import Services from "@/components/services/services";
import MapLocation from "@/components/locations/maplocation";
import CompanyInfo from "@/components/sections/companyinfo/companyinfo";
import ContactUs from "@/components/sections/contact";

export default function Home() {
  return (
    <section className="w-full min-h-[400vh] bg-gray-50 relative scroll-smooth">
      <ContactUs />
      <HeroSection />
      <CompanyInfo />
      <Services />
      <MapLocation />
      <h2 className='lg:text-[2.4rem] md:text-[2rem] text-[1.8rem] px-2 font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 lg:mt-4 mt-0'>Contact us</h2>
      <Footer />
    </section>
  )
}
