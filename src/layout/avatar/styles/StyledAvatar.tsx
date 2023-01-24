import styled from "styled-components";

export const StyledAvatarWrapper = styled.div(props => ({
    margin: "0 0 10px 0"
}))

export const StyledAvatar = styled.img(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "45px",
    maxWidth: "45px",
    minHeight: "45px",
    maxHeight: "45px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    objectPosition: "center",
    objectFit: "cover",
    userSelect: "none",
    "-ms-user-select": "none",
}))