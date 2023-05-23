import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/styles/theme";

export const ProfileContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
