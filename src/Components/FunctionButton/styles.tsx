import styled from 'styled-components';

export const StyledFunctionButton = styled.div`
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fefbd8;
    font-size: 30px;
    color: #36486b;
    flex: 1;
    border: 2px #618685;
    font-family: Helvetica, sans-serif;
    border-radius: 5%;
    margin: 2px 15px 0px 0;
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    &:active {
        background-color: #d5f4e6;
    }
`;