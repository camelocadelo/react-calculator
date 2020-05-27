import styled from "styled-components";

export const StyledButton = styled.div`
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background:  #d5f4e6;
    font-size: 30px;
    color: #36486b;
    flex: 1;
    cursor: pointer;
    border: 2px #618685;
    font-family: Helvetica, sans-serif;
    border-radius: 50%;
    margin: 7px 10px 0 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    &:active {
        background-color: #fefbd8;
      }
`;