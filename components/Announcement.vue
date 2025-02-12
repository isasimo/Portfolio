<!-- Announcement.vue -->
<!-- Call this instance like:  
    <AnnouncementComponent :hover-text="'Hover text'" :initial-text="'Default text'" :link-url="'https://github.com/isasimo/Portfolio'"></AnnouncementComponent>
 -->
<template>
  <a :href="linkUrl" target="_blank" class="announcement uppercase" @mouseenter="changeText" @mouseleave="resetText">
    <span class="banner-text">{{ bannerText }}</span>
  </a>
</template>

<script>
export default {
  name: "AnnouncementComponent",
  props: {
    // Allow parent component to pass custom hover text
    hoverText: {
      type: String,
      default: "⚡ Duplicate portfolio from Github ⚡",
    },
    // Initial text (default in case no text is passed)
    initialText: {
      type: String,
      default: "This portfolio is open-source — use it!",
    },
    linkUrl: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      bannerText: this.initialText, // Set the initial text
    };
  },
  methods: {
    // Change text on hover
    changeText() {
      this.bannerText = this.hoverText;
    },
    // Reset text when mouse leaves
    resetText() {
      this.bannerText = this.initialText;
    },
  },
};
</script>

<style scoped>
.announcement {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  max-width: 100vw;
  background-color: var(--accent-color);
  color: var(--background-color);
  font-family: "Figtree", sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 100%;
  padding: 0;
  text-align: center;
  padding: 0 1rem;
}

.banner-text {
  transition: content 0.3s ease;
}

.announcement:hover {
  background-color: var(--primary-color);
  cursor: pointer;
}
</style>
