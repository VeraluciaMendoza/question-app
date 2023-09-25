import { Container } from "react-bootstrap";
import Card from "../Card";

const OptionsGrid = () => {
  return (
    <Container className="mt-4">
      <h2>Let's play</h2>
      <Card option="Sports" src="/icons/basketball.png"/>
      <Card option="Math" src="/icons/calculator.png"/>
    </Container>
  )
}

export default OptionsGrid;