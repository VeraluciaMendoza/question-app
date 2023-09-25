import { Wrapper, Category, ImageContainer } from "./styled";

const Card = ({ option, src }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={src} alt={option}/>
        <div></div>
      </ImageContainer>
      <Category>{option}</Category>
      <span>50 questions</span>
    </Wrapper>
  )
}

export default Card;