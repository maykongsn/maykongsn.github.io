import { Link } from "react-router-dom";
import { Contact, FooterContainer } from "./styles";

import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import mailIcon from "../../assets/mail.svg";

export function Footer() {
  return (
    <FooterContainer>
      <Link to={`https://www.linkedin.com/in/maykon-nunes-b93a23268/`}>
        <Contact><img src={linkedinIcon} /><p>Linkedin</p></Contact>
      </Link>
      <Link to={`https://www.github.com/maykongsn`}>
        <Contact><img src={githubIcon} /><p>Github</p></Contact>
      </Link>
      <Link to={""}>
        <Contact><img src={mailIcon} /><p>maykongsn@gmail.com</p></Contact>
      </Link>
    </FooterContainer>
  )
}