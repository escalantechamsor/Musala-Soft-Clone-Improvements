
import styles from './hero.module.css';

import CarouselHero from './carouselhero';
import ResponsiveCarouselHero from './responsivecarousel';
function HeroSection() {
  return (
    <section className='w-full md:h-[90vh] min-h-[60vh] '>
      <section className={`w-full min-h-[60vh] bg-gray-50 ${styles.carousel_hero} overflow-hidden`}>
        <CarouselHero />
        <ResponsiveCarouselHero />
      </section>
    </section>
  )
}

export default HeroSection