<!-- About.vue -->
<template>
  <section class="about" ref="aboutSection">
    <h2 class="default-animate"><span class="highlight">Hey! Hola! Hallo!</span> I’m Isa, a product designer in Switzerland 🇨🇭</h2>
    <div class="default-animate">
      <p>
        Originally from Barcelona and living in Switzerland for 7 years, I’m a passionate interface designer that combines an understanding of various fields with a talent for innovative thinking. By creating visionary prototypes and refining products with care, I had the pleasure to work for companies like Disney Research, Constructor or Appfire while winning awards and prizes. Additionally, I’m
        a proud founder of a thrilling community garden.
      </p>
      <div class="collapsible-container" :class="{ collapsed: isCollapsed }">
        <div ref="collapsibleContent" class="content">
          <p>My journey into the design world began at the age of 15, using CorelDRAW (who remembers that?) I emerged victorious in a poster design contest for my hometown's festivities. From that moment, I was hooked.</p>
          <p>
            A formal education in graphic design introduced me to the foundations of typography, color, layout and the basics of design. This education, paved a way to the modern design scenes of Barcelona and Madrid, where I collaborated with companies and startups to create multimedia experiences. In 2012, I developed an interactive website for "Els Convidats", the first interactive miniseries
            produced in Catalonia. The project earned recognition with a Laus, a prestigious design award in Catalonia.
          </p>
          <p>
            In 2015, I embarked on a new adventure in Switzerland, where I landed into Product Design for the first time, that's the moment when everything just clicked. Joining Disney Research, I found myself immersed in a world of innovation and creativity, my role was to bring prototypes to life for R&D. Since then, I've been drawn to the challenge of integrating cutting-edge technology into
            interfaces while ensuring the best possible user experience, regardless the age.
          </p>
          <p>Between career milestones, I took two breaks in 2014 and 2018, embracing the freedom to travel the world without a fixed return ticket. These journeys enriched my perspective and creativity while learning new skills like a Permaculture Design Certificate. I'm a strong believer of continuous learning in all type of fields, not just design.</p>
          <p>In my free time, you'll often find me hiking in the Alps or cultivating hundreds of kilos of veggies in the community garden I founded in my hometown. Sharing my heart between two places, I feel at home in both Barcelona and Switzerland.</p>
          <p>In addition, I’m a proud <a href="https://www.16personalities.com/profiles/cc17b6f3582c9" target="_blank">ENFP-A Campaigner</a> who likes to connect and cooperate with people.</p>
        </div>
      </div>
      <div class="toggle">
        <a class="buttonet-secondary" @click="toggleContent">
          <svg height="8" width="8" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="4" cy="4" rx="4" ry="4" style="fill: var(--accent-color); stroke: none" />
          </svg>
          {{ isCollapsed ? "Unlock longer version" : "See shorter version" }}
        </a>
      </div>
    </div>
  </section>
  <section>
    <img src="../assets/isa-about.png" alt="Photos of myself in different situations: hiking in Dolomites, drawing in Vietnam and traveling in Indonesia" />
  </section>
  <ExperienceComponent></ExperienceComponent>
  <AnnouncementComponent :link-url="'https://github.com/isasimo/Portfolio'"></AnnouncementComponent>
</template>

<script>
import ExperienceComponent from "./Experience.vue";
import AnnouncementComponent from "./Announcement.vue";
import ScrollReveal from "scrollreveal";
import { revealDefault } from "@/scrollAnimations";

export default {
  components: {
    ExperienceComponent,
    AnnouncementComponent,
  },

  data() {
    return {
      isCollapsed: true,
    };
  },

  mounted() {
    const elements = this.$refs.aboutSection.querySelectorAll(".default-animate");
    elements.forEach((el, index) => {
      ScrollReveal().reveal(el, {
        ...revealDefault,
        delay: index * 100,
      });
    });
  },

  methods: {
    toggleContent() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.about {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about p {
  margin-top: 24px;
}

.collapsible-container {
  overflow: hidden;
  max-height: 180px;
  transition: max-height 0.7s ease-out;
  position: relative;
}

.collapsible-container:not(.collapsed) {
  max-height: 1200px;
}

.collapsible-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  pointer-events: none;
  z-index: 1;
}

.collapsible-container:not(.collapsed)::after {
  display: none;
}

.toggle {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.buttonet-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 2px solid var(--primary-color);
  border-radius: 40px;
  cursor: pointer;
  z-index: 2;
}

.buttonet-secondary:hover {
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}
</style>
