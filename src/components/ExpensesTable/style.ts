import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--button-color);
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
      font-size: 1.5rem;

      @media (max-width: 600px) {
        padding: 1.5px;
      }
    }

    td {
      text-align: center;
      padding: 0.5rem 4px 0 0;
      border: 0;
      border-radius: 0.25rem;

      button {
        transform: translateY(-10%);
        margin: 0.25rem;
      }
      @media (max-width: 600px) {
        padding: 1.5px;
      }
    }
  }
`;

export const TableControl = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0.5rem;
  align-items: center;
`;

export const Totals = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem;

  h2 {
    font-size: 1.25rem;
  }
`;
