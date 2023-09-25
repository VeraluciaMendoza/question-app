import { Col, Container, Row } from "react-bootstrap";
import { Points, Ranking, Wrapper } from "./styled";

const RankingUser = ({ ranking, points }) => {
  return (
    <Container>
      <Wrapper>
        <Ranking>
          <Row>
            <Col xs={4} className="d-flex align-items-center">
              <img alt="ranking" src="/icons/trophy.png"/>
            </Col>
            <Col xs={8} className="d-flex align-items-center flex-column">
              <span>Ranking</span>
              <p>{ranking}</p>
            </Col>
          </Row>
        </Ranking>
        <Points>
          <Row>
            <Col xs={4} className="d-flex align-items-center">
              <img alt="points" src="/icons/coin.png"/>
            </Col>
            <Col xs={8} className="d-flex align-items-center flex-column">
              <span>Points</span>
              <p>{points}</p>
            </Col>
          </Row>
        </Points>
      </Wrapper>
    </Container>
  )
}

export default RankingUser;