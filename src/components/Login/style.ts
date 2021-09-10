import styled from 'styled-components'

export const Container = styled.div`
  /* max-width: 1120px; */
  width: auto;
  height: 100%;
  padding: 2rem 1rem 12rem;
  /* background-color: var(--contrast); */
  

  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);


  display: flex;
  justify-content: center;
  align-items: center;

  .input-colors {
    color: var(--green-font);
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`