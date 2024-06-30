<!-- Header.vue -->
<template>
    <header class="header">
      <a href="/" class="page-name">
        <img src="../assets/isa-avatar.png" alt="Profile picture of Isa Simo" />
        <p>Isa Simó</p>
      </a>
      <nav>
        <ul class="navigation-menu">
            <li><router-link to="/home" active-class="active-link">Home</router-link></li>
            <li><router-link to="/about" active-class="active-link">About</router-link></li>
        </ul>
      </nav>
      <div class="social-media">
        <a href="https://www.linkedin.com/in/isabelsimo/" target="_blank"><img src="../assets/social-linkedin.svg" alt="Linkedin logo" /></a>
        <a href="https://x.com/isasimo" target="_blank"><img src="../assets/social-twitter.svg" alt="X logo" /></a>
        <a href="https://www.instagram.com/thosewemet/" target="_blank"><img src="../assets/social-instagram.svg" alt="Instagram logo" /></a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
    navigate(page) {
      this.$emit('page-change', page); // Emit page-change event with selected page
    }
  }
  };
  </script>
  
  <style scoped>
  .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 40px 0 40px;
  flex: 1;
}

.page-name{
  display: flex;
  align-items: center;
  gap: 1rem;
}

.page-name img{
  width: 50px;
  height: 50px;
}

.page-name p{
  color: var(--primary-color);
  font-family: "Alice", serif;
  font-weight: 400;
  font-size: 1.50rem;
}

.navigation-menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0;
}

.navigation-menu a {
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  position: relative;
}

.navigation-menu a.active-link::after {
    content: '';
  position: absolute;
  left: 50%; /* Start from the center */
  transform: translateX(-50%);
  bottom: -8px; /* distance from text to underline */
  width: 70%;
  height: 2px; /* thickness of the underline */
  background-color: var(--primary-color);
  transition: width 0.3s ease, background-color 0.3s ease; /* Smooth transitions */
}

.navigation-menu a:hover::after {
  width: calc(100%); /* Adjust the width of the underline relative to text width */
  background-color: var(--accent-color); /* Color of the underline on active or hover */
}

.navigation-menu a:hover {
  color: var(--accent-color);
}

.social-media {
  display: flex;
  flex-wrap: wrap;
}

.social-media a {
  margin-left: 24px;
}
</style>
  