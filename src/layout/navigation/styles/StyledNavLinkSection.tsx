import { Property } from "csstype";
import styled from "styled-components";

type Props = {
    transition?: Property.Transition;
    isOpen?: boolean;
}
export const StyledNavLinkSection = styled.div<Props>(props => ({
    display: "flex",
    alignItems: "center",
    opacity: props.isOpen ? `0.7` : `1`,
    transform: props.isOpen ? `scale(0.8)` : `scale(1)`,
    transition: `calc(${ props.transition } + 0.1s)`,
    translate: "0.2s",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(0.7)"
    }
}))