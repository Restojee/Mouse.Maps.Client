import styled from "styled-components";
import {Property} from "csstype";

export const StyledLayout = styled.div(({ theme, ...props }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: "100vh",
    height: "100vh",
    width: "100%",
    fontSize: theme.font.fontSize,
    backgroundColor: theme.colors.primary,
    "@media all and (max-width: ${ baseTheme.sizes.media.medium }px)": {
        flexDirection: "column",
        padding: "0 10px"
    },
}))