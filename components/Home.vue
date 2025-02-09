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
      <h5 class="centered uppercase">⚡ A lightning ⚡</h5>
      <h1 class="centered uppercase" ref="heroTitleSection"><span class="highlight">Digital</span> Product<span class="highlight"> Designer</span></h1>
    </section>
    <section class="gallery" ref="gallerySection">
      <!-- CARD 1 -->
      <a href="/constructor" class="card">
        <div class="card-image">
          <img src="../assets/gallery-constructor.jpg" alt="Constructor for Schools screenshots" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Product Design</p>
            <div class="arrow-anim">
              <svg class="arrow" width="37" height="12" viewBox="0 0 37 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 5.3C0.613401 5.3 0.3 5.6134 0.3 6C0.3 6.3866 0.613401 6.7 1 6.7V5.3ZM36.495 6.49497C36.7683 6.22161 36.7683 5.77839 36.495 5.50503L32.0402 1.05025C31.7668 0.776886 31.3236 0.776886 31.0503 1.05025C30.7769 1.32362 30.7769 1.76684 31.0503 2.0402L35.0101 6L31.0503 9.9598C30.7769 10.2332 30.7769 10.6764 31.0503 10.9497C31.3236 11.2231 31.7668 11.2231 32.0402 10.9497L36.495 6.49497ZM1 6.7H36V5.3H1V6.7Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <h3 class="black">Constructor for Schools</h3>
        </div>
      </a>

      <!-- CARD 2 -->
      <a href="/jsu" class="card">
        <div class="card-image">
          <img src="../assets/gallery-jsu.jpg" alt="Universal Rule Build for Jira screenshot" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Product Design</p>
            <div class="arrow-anim">
              <svg class="arrow" width="37" height="12" viewBox="0 0 37 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 5.3C0.613401 5.3 0.3 5.6134 0.3 6C0.3 6.3866 0.613401 6.7 1 6.7V5.3ZM36.495 6.49497C36.7683 6.22161 36.7683 5.77839 36.495 5.50503L32.0402 1.05025C31.7668 0.776886 31.3236 0.776886 31.0503 1.05025C30.7769 1.32362 30.7769 1.76684 31.0503 2.0402L35.0101 6L31.0503 9.9598C30.7769 10.2332 30.7769 10.6764 31.0503 10.9497C31.3236 11.2231 31.7668 11.2231 32.0402 10.9497L36.495 6.49497ZM1 6.7H36V5.3H1V6.7Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <h3 class="black">JSU Automation Suite for Jira Workflows</h3>
        </div>
      </a>

      <!-- CARD 3 -->
      <a href="/noimos" class="card">
        <div class="card-image">
          <img src="../assets/gallery-noimos.jpg" alt="Screenshot of a phone with Noimos mockup" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Product Design</p>
            <div class="arrow-anim">
              <svg class="arrow" width="37" height="12" viewBox="0 0 37 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 5.3C0.613401 5.3 0.3 5.6134 0.3 6C0.3 6.3866 0.613401 6.7 1 6.7V5.3ZM36.495 6.49497C36.7683 6.22161 36.7683 5.77839 36.495 5.50503L32.0402 1.05025C31.7668 0.776886 31.3236 0.776886 31.0503 1.05025C30.7769 1.32362 30.7769 1.76684 31.0503 2.0402L35.0101 6L31.0503 9.9598C30.7769 10.2332 30.7769 10.6764 31.0503 10.9497C31.3236 11.2231 31.7668 11.2231 32.0402 10.9497L36.495 6.49497ZM1 6.7H36V5.3H1V6.7Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <h3 class="black">Claims app for Noimos</h3>
        </div>
      </a>

      <!-- CARD 4 -->
      <a href="#" class="card">
        <div class="card-image">
          <img src="../assets/gallery-disney.jpg" alt="Disney Research Studios logo" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Concept design</p>
            <p class="card-type">Coming soon</p>
          </div>
          <h3 class="black">Disney Research</h3>
        </div>
      </a>

      <!-- CARD 5 -->
      <a href="#" class="card">
        <div class="card-image">
          <img src="../assets/gallery-fluent.jpg" alt="Screenshot of a phone with Fluent mockup" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Concept design</p>
            <p class="card-type">Coming soon</p>
          </div>
          <h3 class="black">Fluent</h3>
        </div>
      </a>

      <!-- CARD 6 -->
      <a href="#" class="card">
        <div class="card-image">
          <img src="../assets/gallery-cropcalculator.jpg" alt="Screenshot of a phone with Crop Calculator mockup" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Product design, development</p>
            <p class="card-type">Coming soon</p>
          </div>
          <h3 class="black">Crop Calculator</h3>
        </div>
      </a>

      <!-- CARD 7 -->
      <a href="#" class="card">
        <div class="card-image">
          <img src="../assets/gallery-foofit.jpg" alt="Screenshot of a phone with Foofit mockup" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Product design</p>
            <p class="card-type">Coming soon</p>
          </div>
          <h3 class="black">Foofit</h3>
        </div>
      </a>

      <!-- CARD 8 -->
      <a href="#" class="card">
        <div class="card-image">
          <img src="../assets/gallery-elscampaners.jpg" alt="Cherries on a cherry tree" />
        </div>
        <div class="card-info">
          <div class="card-title">
            <p class="card-type">Jack of all trades</p>
            <p class="card-type">Coming soon</p>
          </div>
          <h3 class="black">Els Campaners</h3>
        </div>
      </a>
    </section>
    <ExperienceComponent></ExperienceComponent>
  </div>
</template>

<script>
import ExperienceComponent from "./Experience.vue";
import ScrollReveal from "scrollreveal";
import { revealDefault } from "@/scrollAnimations";

export default {
  components: {
    ExperienceComponent,
  },

  mounted() {
    // Apply ScrollReveal
    ScrollReveal().reveal(this.$refs.heroTitleSection, revealDefault);
    ScrollReveal().reveal(this.$refs.heroTextSection, revealDefault);

    const galleryImages = this.$refs.gallerySection.querySelectorAll("a");
    galleryImages.forEach((a, index) => {
      ScrollReveal().reveal(a, {
        duration: 400,
        origin: "bottom",
        distance: "50px",
        scale: 0.85,
        delay: 150 + index * 50, // Delay each card for a cascading effect
        easing: "ease-out",
        reset: false,
      });
    });
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}

/***** Hero ******/

.hero {
  width: 100%;
  max-width: 984px; /* Limit width for larger screens */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

/***** Gallery ******/

.gallery {
  max-width: 87rem;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.card {
  width: 360px;
  border-radius: 60px;
  display: block;
  overflow: hidden; /* Ensure content doesn’t overflow the card */
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.card-image::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%; /* Adjust this value to control the gradient's height */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%); /* Change colors and opacity as needed */
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
  color: var(--tertiary-color);
}

.card-info {
  background-color: var(--primary-color);
  padding: 1.5rem 2rem;
  height: 170px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title img {
  width: 35px;
  font-size: 1.2rem;
}

.arrow {
  transition: transform 0.2s ease; /* Apply the transition on transform */
}
.arrow-anim {
  width: 35px;
}
.arrow path {
  fill: var(--background-color);
}

.card:hover .arrow {
  transform: translateX(10px); /* Move the arrow 10px to the right */
}

/* Ticker */

.ticker {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1; /* Lower z-index to keep it behind other content */
  overflow: hidden;
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
    transform: translateX(-100%);
  }
}

@media (max-width: 480px) {
  .home {
    gap: 60px;
  }
  .ticker {
    display: none;
  }
  .gallery {
    max-width: max-content;
  }
  .card {
    width: 100%;
  }
  .card-image {
    height: fit-content;
  }
}
</style>
