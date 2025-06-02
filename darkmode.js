const darkModeStyle = `
  html, body, iframe, div, section, article, header, footer, nav, main {
    background-color: #121212 !important;
    color: #e0e0e0 !important;
  }

  * {
    background-color: transparent !important;
    border-color: #333 !important;
    color: #e0e0e0 !important;
  }

  img, video, picture, canvas {
    filter: brightness(0.8) contrast(1.2) !important;
  }

  a {
    color: #8ab4f8 !important;
  }
`;

const style = document.createElement("style");
style.textContent = darkModeStyle;
document.documentElement.appendChild(style);
