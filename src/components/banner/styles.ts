import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 550px) {
    font-size: 8px;
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;