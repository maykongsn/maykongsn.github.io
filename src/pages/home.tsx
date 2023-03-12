import { Banner } from "../components/banner";
import { Footer } from "../components/footer";
import { Input } from "../components/Input";
import { Skills } from "../components/skills";
import { textBanner } from "../utils/text-banner";
import { Container, TerminalContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <TerminalContainer>
        <Input />
        <Banner text={textBanner} />
        <Skills />
        <Footer />
      </TerminalContainer>
    </Container>
  )
}