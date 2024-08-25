<!-- Footer.vue -->
<template>
    <footer>
      <p>Contact me</p>
      <a href="mailto:designwithisa@gmail.com" class="maillink" target="_blank" rel="noopener noreferrer">designwithisa@gmail.com</a>
    </footer>
  </template>
  
<script>
  export default {
    // Component options
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
}

.maillink:hover {
  color: var(--accent-color);
}

</style>
  