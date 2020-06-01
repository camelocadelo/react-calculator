import styled from "styled-components";

export const StyledDropDownContainer = styled("div")`
  width: 15em;
  margin: 0 auto;
  text-align: center;
`;

export const StyledDropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #484f4f;
  background: #ffffff;
  height: 1em;
`;

export const StyledDropDownListContainer = styled("div")``;

export const StyledDropDownList = styled("ul")`
  overflow-y: scroll;
  max-height: 300px;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #484f4f;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const StyledListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
