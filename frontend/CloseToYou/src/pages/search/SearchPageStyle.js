import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const ResultMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  font-size: 1.5rem;
  color: ${colors.text[0]};
  text-align: center;
`;

export const ResultCount = styled.div`
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 10px;

  span {
    color: ${colors.point[0]};
  }
`;
