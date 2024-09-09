<!-- Footer.vue -->
<template>
    <footer>
      <p>Contact me</p>
      <a href="mailto:designwithisa@gmail.com" class="maillink" target="_blank" rel="noopener noreferrer">designwithisa@gmail.com</a>
      <SocialMediaComponent></SocialMediaComponent>
    </footer>
  </template>
  
<script>
  import SocialMediaComponent from './SocialMedia.vue';

  export default {
    components: {
      SocialMediaComponent
    }
  };
</script>
  
<style scoped>

footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  margin-bottom: 180px;
}

.maillink {
  font-weight: 500;
  margin-bottom: 40px;
}

.maillink:hover {
  color: var(--accent-color);
}

</style>
  