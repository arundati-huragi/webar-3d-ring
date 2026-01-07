# 3D-Jewellery-Display

## Project Overview

This project is a personal initiative developed as part of my portfolio for internship applications in web development and augmented reality. It showcases an interactive Augmented Reality (AR) web application built using A-Frame and WebXR, featuring a virtual jewelry display with 3D models of gold, diamond, and silver rings. The application allows users to explore and interact with jewelry in a browser-based AR environment, demonstrating skills in front-end development, 3D graphics, and user interaction design.

As an aspiring developer, this project highlights my ability to learn and implement emerging web technologies, create engaging user experiences, and solve technical challenges in AR/VR development.

## Features

- **Interactive 3D Jewelry Display**: Users can view and interact with high-quality 3D models of rings on virtual jewelry boxes.
- **Augmented Reality Support**: Leverages WebXR for immersive AR experiences directly in compatible browsers.
- **Custom A-Frame Components**:
  - `ring-focus`: Enables selection and highlighting of rings.
  - `drag-rotate`: Allows manual dragging and rotation of models.
  - `auto-rotate`: Provides automatic rotation for dynamic viewing.
  - `camera-focus`: Adjusts camera positioning for focused interactions.
  - `state-manager`: Handles interaction states and selections.
  - `metal-enhance`: Enhances material properties for realistic metallic rendering.
- **Realistic Lighting and Effects**: Includes ambient, directional, and animated point lights for sparkle effects on diamonds.
- **HUD Reset Button**: Provides a user-friendly way to reset the view to the initial state.

## Technologies and Skills Demonstrated

- **A-Frame**: Framework for building VR/AR experiences in the web.
- **WebXR**: API for accessing VR/AR devices in browsers.
- **JavaScript (ES6+)**: Custom component development and interactivity logic.
- **HTML5 & CSS3**: Structure and styling for the web interface.
- **3D Graphics**: Working with GLTF/GLB models and material properties.
- **Lighting and Shaders**: Implementing physically-based rendering and animations.
- **Responsive Web Design**: Ensuring compatibility across modern browsers.
- **Version Control**: Git for project management and deployment.

## Challenges and Learnings

Developing this AR application presented several challenges that enhanced my technical skills:

- **3D Model Integration**: Learning to import and optimize GLTF models while managing material properties for realistic rendering.
- **Component-Based Architecture**: Designing and implementing custom A-Frame components to handle complex interactions like drag-rotate and state management.
- **Lighting and Performance**: Balancing realistic lighting effects with browser performance, including optimizing animations for smooth user experience.
- **WebXR Compatibility**: Ensuring cross-browser support and handling device-specific AR capabilities.
- **User Experience Design**: Creating intuitive interactions in a 3D space, including HUD elements and reset functionality.

Through this project, I gained hands-on experience with modern web technologies, improved my problem-solving skills, and developed a deeper understanding of AR/VR development principles.

## Installation and Setup

1. **Clone the Repository**:
   bash
   git clone https://github.com/arundati-huragi/3D-Jewellery-Display.git
   cd 3D-Jewellery-Display
   

2. **Run Locally**:
   - Open `index.html` directly in a WebXR-compatible browser (e.g., Chrome or Firefox).


## Usage

- **Launch**: Open the application in a compatible browser.
- **Interact**: Click on rings to focus, drag to rotate manually, or let them auto-rotate.
- **Reset**: Use the "RESET" button that appears when a ring is selected.
- **AR Mode**: Enable AR through browser settings for immersive viewing (requires compatible hardware).

## Project Structure

```
3D-Jewellery-Display/
├── index.html                 # Main application file with A-Frame scene
├── README.md                  # Project documentation
├── CNAME                      # GitHub Pages configuration
├── assets/                    # Environment textures and HDR files
├── components/                # Custom A-Frame components (6 JS files)
└── jewelry-box-ar/            # 3D model assets (GLB files)
```

## Demo

Experience the live application: [https://arundati-huragi.github.io/3d-ring-webAR/]

I'm passionate about web development and AR/VR technologies. 
- GitHub: [arundati-huragi](https://github.com/arundati-huragi)


Built with using A-Frame and WebXR for an immersive web experience.
