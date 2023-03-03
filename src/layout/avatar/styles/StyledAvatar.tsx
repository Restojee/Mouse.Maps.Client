import styled from "styled-components";
import {Property} from "csstype";

type StyledAvatarType = {
    margin: Property.Margin,
    size: Property.Width
}
export const StyledAvatar = styled.img<Partial<StyledAvatarType>>(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: props.margin,
    minWidth: props.size || '45px',
    maxWidth: props.size || '45px',
    minHeight: props.size || '45px',
    maxHeight: props.size || '45px',
    border: "2px solid rgba(255, 255, 255, 0.2)",
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