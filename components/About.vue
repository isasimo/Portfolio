<!-- About.vue -->
<template>
  <section class="about" ref="aboutSection">
    <h2 class="default-animate"><span class="highlight">Hey! Hola! Hallo!</span> I’m Isa, a product designer in Switzerland</h2>
    <div class="default-animate">
      <p>My journey into the design world began at the age of 15, using CorelDRAW (who remembers that?) I emerged victorious in a poster design contest for my hometown's festivities. From that moment, I was hooked.</p>
      <p>My formal education in graphic design introduced me to the foundations of typography, color, layout and the basics of design. This education, paved a way to the modern design scenes of Barcelona and Madrid, where I collaborated with companies and startups to create multimedia experiences. In 2012, I developed an interactive website for "Els Convidats", the first interactive miniseries produced in Catalonia. The project earned recognition with a Laus, a prestigious design award in Catalonia.</p>
      <p>In 2015, I embarked on a new adventure in Switzerland, where I landed into Product Design for the first time, that's the moment when everything just clicked. Joining Disney Research, I found myself immersed in a world of innovation and creativity, my role was to bring prototypes to life for R&D. Since then, I've been drawn to the challenge of integrating cutting-edge technology into interfaces while ensuring the best possible user experience, regardless the age.</p>
      <p>Between career milestones, I took two breaks in 2014 and 2018, embracing the freedom to travel the world without a fixed return ticket. These journeys enriched my perspective and creativity while learning new skills like a Permaculture Design Certificate. I'm a strong believer of continuous learning in all type of fields, not just design.</p>
      <p>In my free time, you'll often find me hiking in the Alps or cultivating hundreds of kilos of veggies in the community garden I founded in my hometown. Sharing my heart between two places, I feel at home in both Barcelona and Switzerland.</p>
      <p>In addition, I’m a proud <a href="https://www.16personalities.com/profiles/cc17b6f3582c9">ENFP-A Campaigner</a> who likes to connect and cooperate with people.</p>
    </div>
    <div class="gallery default-animate">
      <img src="../assets/01.jpg" alt="" />
      <img src="../assets/02.jpg" alt="" />
      <img src="../assets/03.jpg" alt="" />
      <img src="../assets/04.jpg" alt="" />
      <img src="../assets/05.jpg" alt="" />
      <img src="../assets/06.jpg" alt="" />
    </div>
  </section>
  <ExperienceComponent></ExperienceComponent>

</template>

<script>
import ExperienceComponent from './Experience.vue';
import ScrollReveal from 'scrollreveal';
import { revealDefault } from '@/scrollAnimations';

export default {
  components: {
    ExperienceComponent
  },
    
  mounted() {
    // Apply Default ScrollReveal 
    const elements = this.$refs.aboutSection.querySelectorAll('.default-animate');
      elements.forEach((el, index) => {
        ScrollReveal().reveal(el, {
          ...revealDefault, // Spread the reveal properties
          delay: index * 100, // Add a delay based on each element
        });
      });
  },
};
</script>

<style scoped>
.about {
  max-width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about p {
  margin-top: 28px;
}
.gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between images */
  justify-content: center; /* Center the gallery content */
  margin-top: 80px;
}

.gallery img {
  flex: 1 1 calc(33.333% - 20px); /* 3 columns layout */
  max-width: calc(33.333% - 20px);
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0;
}
@media (max-width: 768px) {
.gallery{
  width: 80%;
}
.gallery img {
  flex: 1 1 calc(50% - 20px); /* 2 columns on smaller screens */
  max-width: calc(50% - 20px);
}
}
@media (max-width: 480px) {
.gallery{
  width: 70%;
}
.gallery img {
  flex: 1 1 calc(100% - 20px); /* 1 column on very small screens */
  max-width: calc(100% - 20px);
}
}

</style>