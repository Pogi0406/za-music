import { ButtonText, MainTitle } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper, HeroText } from "./styled";
import RadioImage from "assets/images/Radio-desktop.png";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={RadioImage} alt="Hands holding radio" />
    </Wrapper>
  );
}

export default Hero;
