# Product Design Portfolio Template

This project aims to provide an easy-to-use portfolio template for product designers who want to showcase their work. Built with VUE, this boilerplate is a good deal for anyone who needs an awesome way to present their designs.

## How to Use

### 1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/product-design-portfolio.git
   cd product-design-portfolio

   ```

### 2. **Use VITE (Optional)**:
   This will set the project ready for local development:

   ```bash
   npm install # Install dependencies
   npm run dev # Start local server

   ```

### 3. **Customize your portfolio:**
- Edit `Header.vue` with your favicon, name and social media links.
- Edit `Footer.vue` with your email or a CTA or your preference.
- Edit `Home.vue`. This is the page where people land, put tons of love on the text and thumbnails of your projects.
- Edit `About.vue`. Expand the information about yourself. Be creative!  
- Edit `Experience.vue` with your latest experience. This component will show up at the bottom of Home and About.
- To add and edit individual projects, see [Project Template Component](#project-template-component) section.

### 4. **Upload the portfolio**
   -  Upload to your server or [Github pages](https://pages.github.com/)
   -  :boom: Boom! Your portfolio is online, it was that easy!
   
## Project Template Component

The `ProjectTemplate.vue` component is a template that can be used as a starting point for creating new project components.

### Usage

- Copy the `ProjectTemplate.vue` file into your components directory and modify the name.
- Import the component and adjust the correct path in `router.js`. This sets up the url.
- Remove or add sections according to your needs. Here are the sections that I provide in the template:
  
![Project template sections](https://github.com/user-attachments/assets/2b18a827-ed20-47be-8de0-353e6da6e7dd)



## Features

- **HTML/CSS/JS**: Uses basic web technologies to ensure compatibility and simplicity.
- **VITE Integration (Optional)**: Includes VITE setup for local development convenience (but not required).

## Contributions

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](<[URL](https://en.wikipedia.org/wiki/MIT_License?useskin=vector)>) - see the [LICENSE](<[URL](https://github.com/isasimo/Portfolio?tab=MIT-1-ov-file)>) file for details.
