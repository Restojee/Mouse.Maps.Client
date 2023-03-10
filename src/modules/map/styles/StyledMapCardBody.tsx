import styled from "styled-components";

export const StyledMapCardBody = styled.div(props => ({
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center"
    }
}))
