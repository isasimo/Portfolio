<!-- Experience.vue -->
<template>
    <section class="experience" ref="experienceSection">
      <h2>Experience</h2>
      <div class="experience-list">
        <li>
          <div class="experience-item">
            <h3>Constructor</h3>
            <div class="dashed-line"></div>
            <div class="position">Product designer</div>
          </div>
          <div class="date">2022—now</div>
        </li>
        <li>
          <div class="experience-item">
            <h3>Freelance</h3>
            <div class="dashed-line"></div>
            <div class="position">Product designer</div>
          </div>
          <div class="date">2019—22</div>
        </li>
        <li>
          <div class="experience-item">
            <h3>Disney Research</h3>
            <div class="dashed-line"></div>
            <div class="position">Digital artist</div>
          </div>
          <div class="date">2015—18</div>
        </li>
        <li>
          <div class="experience-item">
            <h3>Gimalon</h3>
            <div class="dashed-line"></div>
            <div class="position">Product designer</div>
          </div>
          <div class="date">2015—17</div>
        </li>
      </div>
      <a href="https://www.linkedin.com/in/isabelsimo/" class="buttonet" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
    </section>
  </template>
  
  <script>
  import ScrollReveal from 'scrollreveal';
  import { revealLong } from '@/scrollAnimations';

  export default {
    name: 'ExperienceComponent',

    mounted() {
      // Apply ScrollReveal
      ScrollReveal().reveal(this.$refs.experienceSection, revealLong);
    },
  };
  </script>
  
<style scoped>
.experience {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.experience-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.experience li {
  display: flex;
  width: 100%;
}

.experience-item {
  display: flex;
  align-items: center;
  width: 85%;
}

.experience-item h3 {
  width: fit-content;
  margin-right: 10px;
}

.dashed-line {
  flex-grow: 1;
  border-bottom: 1px dashed var(--secondary-color);
  margin: 0 10px; 
}

.position {
  color: var(--secondary-color);
  margin-left: 10px;
}

.date {
  font-family: "DM Mono", monospace;
  color: var(--tertiary-color);
  margin-left: 20px;
  width: 16%;
}

@media (max-width: 767px) {
  .experience {
    width: 100%;
  }
}

@media (max-width: 480px) {

  .dashed-line{
    display: none;
  }
}

</style>