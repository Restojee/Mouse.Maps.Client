import styled from "styled-components"

export const StyledMapCard = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "10px",
    position: "relative",
    boxShadow: "2px 2px 3px 1px rgba(0, 0, 0, 0.2)",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(0.95)",
    }
}))