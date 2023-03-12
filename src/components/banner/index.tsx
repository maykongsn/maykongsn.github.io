import { Footer } from "../footer";
import { Skills } from "../skills";
import { BannerContainer, PreName } from "./styles";

interface BannerProps {
  text: string;
}

export function Banner({ text }: BannerProps) {
  return (
    <BannerContainer>
      <div>
        <PreName>
          {text}
        </PreName>
      </div>
    </BannerContainer>
  )
}