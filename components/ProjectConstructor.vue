<!-- Project Constructor.vue -->
<template>
    <div class="project">
      <section class="hero">
        <div class="title">
          <h1 ref="ProjectTitleSection">Constructor for Schools</h1>
          <p>Constructor for Schools (formerly Dybuster) develops online learning systems for acquiring fundamental skills in writing and mathematics.</p>
        </div>
        <img src="../assets/project-constructor-hero.jpg" alt="">
      </section>
      <section class="meta">
        <div class="meta-group">
          <h3>Role</h3>
          <ul class="meta-items">
            <li>Interface design</li>
            <li>Design system</li>
            <li>Interactive prototypes</li>
            <li>Wireframing</li>
            <li>Journey mapping</li>
            <li>User flows</li>
            <li>User testing</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Platform</h3>
          <ul class="meta-items">
            <li>Web-app</li>
          </ul>
        </div>
        <div class="meta-group">
          <h3>Duration</h3>
          <ul class="meta-items">
            <li>2017 - 2022 [Freelance]</li>
            <li>2022 - present [Employee]</li>
          </ul>
        </div>
      </section>
      <section class="key-contributions">
        <!-- TODO -->
      </section>
      <section class="prizes">
        <!-- TODO -->
      </section>
      <section class="in-depth">
        <div class="text-section">
          <h2>Grafari</h2>
          <p>Grafari guides children aged 6 and above through a spelling journey, from the introduction of letters and sounds to the basics of writing and typing. The goal during the training is to get the learner to a full focus mode, making elements on screen as clean and less distractive as possible. While exploring other sections of the app, learners engage in various activities such as listening to stories, purchasing items in the virtual shop, and tracking their progress.</p>
        </div>
        <div class="gallery">
          <img src="../assets/grafari1.jpg" alt="">
          <img src="../assets/grafari2.jpg" alt="">
          <img src="../assets/grafari3.jpg" alt="">
          <img src="../assets/grafari4.jpg" alt="">
          <img src="../assets/grafari5.jpg" alt="">
          <img src="../assets/grafari6.jpg" alt="">
          <img src="../assets/grafari7.jpg" alt="">
          <img src="../assets/grafari8.jpg" alt="">
        </div>
      </section>

    </div>
  </template>
  
<script>
  import ScrollReveal from 'scrollreveal';
  
  export default {
    mounted() {
      // Apply ScrollReveal 
      ScrollReveal().reveal(this.$refs.ProjectTitleSection, {
        duration: 600,
        origin: 'bottom',
        distance: '30px',
        scale: 0.92,
        easing: 'ease-out',
        reset: false,
      });
      ScrollReveal().reveal(this.$refs.heroTextSection, {
        duration: 600,
        origin: 'bottom',
        distance: '50px',
        scale: 0.92,
        delay: 200,
        easing: 'ease-out',
        reset: false,
      });  

    },
  };
</script>
  
<style scoped>

</style>
  