<!-- Home.vue -->
<template>
    <div class="home">
      <div class="ticker">
        <div class="ticker__list">
          <div class="ticker__item"><img src="../assets/01.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/02.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/03.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/04.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/05.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/06.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/07.jpg" alt="" /></div>
        </div>
        <div class="ticker__list">
          <div class="ticker__item"><img src="../assets/01.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/02.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/03.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/04.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/05.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/06.jpg" alt="" /></div>
          <div class="ticker__item"><img src="../assets/07.jpg" alt="" /></div>
        </div>
      </div>
      <section class="hero">
        <h1 class="centered" ref="heroTitleSection"><span class="highlight">Hola! I’m Isa,</span> a product designer building products and communities</h1>
        <p class="centered" ref="heroTextSection">
          Originally from Barcelona and living in Switzerland for 7 years, I’m a passionate interface designer that combines an understanding of various fields with a talent for innovative thinking. By creating visionary prototypes and refining products with care, I had the pleasure to work for companies like Disney Research, Constructor or Appfire while winning awards and prizes. Additionally, I’m
          a proud founder of a thrilling community garden.
        </p>
      </section>
      <section class="gallery" ref="gallerySection">
        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-constructor.jpg" alt="Constructor for Schools screenshots" />
          </div>
          <div class="card-info">
            <p class="card-type">Product Design</p>
            <div class="card-title">
              <h3>Constructor for Schools</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-jsu.jpg" alt="Universal Rule Build for Jira screenshot" />
          </div>
          <div class="card-info">
            <p class="card-type">Product Design</p>
            <div class="card-title">
              <h3>JSU Automation Suite for Jira Workflows</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-noimos.jpg" alt="Screenshot of a phone with Noimos mockup" />
          </div>
          <div class="card-info">
            <p class="card-type">Product Design</p>
            <div class="card-title">
              <h3>Claims app for Noimos</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-disney.jpg" alt="Disney Research Studios logo" />
          </div>
          <div class="card-info">
            <p class="card-type">Concept design</p>
            <div class="card-title">
              <h3>Disney Research</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-fluent.jpg" alt="Screenshot of a phone with Fluent mockup" />
          </div>
          <div class="card-info">
            <p class="card-type">Concept design</p>
            <div class="card-title">
              <h3>Fluent</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-cropcalculator.jpg" alt="Screenshot of a phone with Crop Calculator mockup" />
          </div>
          <div class="card-info">
            <p class="card-type">Product design, development</p>
            <div class="card-title">
              <h3>Crop Calculator</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-foofit.jpg" alt="Screenshot of a phone with Foofit mockup" />
          </div>
          <div class="card-info">
            <p class="card-type">Product Design</p>
            <div class="card-title">
              <h3>Foofit</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>

        <a href="#" class="card">
          <div class="card-image">
            <img src="../assets/gallery-elscampaners.jpg" alt="Cherries on a cherry tree" />
          </div>
          <div class="card-info">
            <p class="card-type">Jack of all trades</p>
            <div class="card-title">
              <h3>Els Campaners</h3>
              <img class="arrow" src="../assets/arrow.svg" alt="" />
            </div>
          </div>
        </a>
      </section>
    
    </div>
  </template>
  
  <script>
  import ScrollReveal from 'scrollreveal';
  
  export default {
    mounted() {
      // Apply ScrollReveal 
      ScrollReveal().reveal(this.$refs.heroTitleSection, {
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
      const galleryImages = this.$refs.gallerySection.querySelectorAll('a');
        galleryImages.forEach((a, index) => {
          ScrollReveal().reveal(a, {
            duration: 400,
            origin: 'bottom',
            distance: '50px',
            scale: 0.85,
            delay: 300 + (index * 50), // Delay each card for a cascading effect
            easing: 'ease-out',
            reset: false,
          });
      });
    },
  };
  </script>
<style scoped>

.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
}

/***** Hero ******/

.hero {
  width: 100%; 
  max-width: 984px; /* Limit width for larger screens */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

/***** Gallery ******/

.gallery {
  max-width: 87rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.card {
  width: 400px;
  border-radius: 4px;
  display: block;
  overflow: hidden; /* Ensure content doesn’t overflow the card */
}

.card-image {
  width: 100%;
  height: 220px; 
  overflow: hidden;
  position: relative;
}

.card img {
  width: 100%;
  object-fit: cover; /* Cover the container while preserving aspect ratio */
  transition: transform 0.3s ease; /* Smooth transition for image shift */
  transform: translateY(0); 
}

.card:hover .card-image img {
  transform: translateY(-5%); /* Move the image up on hover */
}

.card-type {
  font-size: 14px;
  color: var(--text-color);
}

.card-info {
  background-color: var(--support-color);
  padding: 1rem;
}

.card-title {
  display: flex;
  align-items: center;
}

.card-title h3 {
  width: 87%;
}

.card-title img {
  font-size: 20px;
  transition: margin-left 0.2s ease;
  width: 35px;
}

.card:hover .arrow {
  margin-left: 10px;
}

/* Ticker */

.ticker {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; /* Lower z-index to keep it behind other content */
}

.ticker__list {
  display: flex;
  animation: ticker 90s infinite linear;
}

.ticker__item {
  margin-right: 20px;
  width: 666px;
  opacity: 0.16;
}

.ticker__item:hover {
  opacity: 0.3;
  transition: opacity 0.3s; 
}

@keyframes ticker {
  100% {
    transform: translateX(-100%); /*try changing this to -100vw*/
  }
}


/* Ensure transition classes are defined in your global stylesheet */
.fade-up-enter-active, .fade-up-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

</style>
  