import styled from "styled-components";
import { SKYBLUE_COLOR } from "../../theme/variables/colors";

export const Wrapper = styled.div`
  min-width: 327px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.08);
;

  span {
    font-weight: 400;
    font-size: 12px;
    color: #323232;
  }

  p {
    margin: 0;
    color: ${SKYBLUE_COLOR[600]};
    font-weight: 700;
    font-size: 18px;
  }
`

export const Ranking = styled.div`
  border-right: 1px solid #F1F1F1;
  display: flex;
  width: 100%;
`

export const Points = styled.div`
  border-left: 1px solid #F1F1F1;
  display: flex;
  width: 100%;
  padding-left: 1rem;
`