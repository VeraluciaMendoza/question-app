import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { NEUTRAL_COLOR } from "../../theme/variables/colors";

const HeaderStyle = styled.header`
  margin: 3rem 1.5rem 1.3rem;

  h2 {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 28px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${NEUTRAL_COLOR[500]};
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <Row className='d-flex align-items-center'>
        <Col xs={9}>
          <h2>Hi, John</h2>
          <span>Let's matke this day productive</span>
        </Col>
        <Col xs={3}>
          <img alt="user" src="/icons/user.png" width={54} height={54}/>
        </Col>
      </Row>
    </HeaderStyle>
  )
}

export default Header;