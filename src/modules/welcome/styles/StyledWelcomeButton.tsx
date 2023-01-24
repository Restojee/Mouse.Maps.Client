import styled from "styled-components";

export const StyledWelcomeButton = styled.div(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "70px",
    color: "#fff",
    position: "relative",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationDirection: "alternate",
    animationIterationC: "infinite",
    transition: "0.2s",
    transitionProperty: "color"
}))