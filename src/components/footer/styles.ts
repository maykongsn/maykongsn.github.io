import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  height: 20vh;
  gap: 40px;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
    margin-top: 8px;
  }
`

export const Contact = styled.div`
  display: flex;

  img {
    width: 40px;
  }
  
  p {
    padding: 10px;
    font-size: 16px;
  }
`