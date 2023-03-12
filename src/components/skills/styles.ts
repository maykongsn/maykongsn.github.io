import styled from "styled-components";

export const SkillsCotainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  grid-template-rows: auto;
  grid-gap: 30px;
  margin-top: 8px;
  
  img {
    width: 20px;
    margin-right: 10px;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Skill = styled.div`
  display: flex;
`