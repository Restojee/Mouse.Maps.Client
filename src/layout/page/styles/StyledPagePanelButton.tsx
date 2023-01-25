import styled from "styled-components";


export const StyledPagePanelButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 5px 8px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    svg {
        width: 28px;
        height: 28px;
    }
`;