import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--green-font);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body); 
    }

    & + input {
      margin-top: 1rem;
    }
  }
`