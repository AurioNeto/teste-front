import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --contrast: #f0f2f5;
    --green-font: #c7d84e;
    --button-color: #33af23;
    --default-font: #ffffff;
    --delete-button: linear-gradient(45deg, #E90F0F 30%, #E90F0F 90%);
    --edit-button: linear-gradient(45deg, #33af23 30%, #33af23 90%);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-weight: 700;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`