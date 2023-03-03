import styled from "styled-components";

export const StyledDrawerHeader = styled.div(({theme}) => ({
    padding: "20px",
    backgroundColor: theme.colors.secondaryDark,
    borderRadius: "inherit",
    zIndex: 1,
    position: "sticky",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: `calc(${ theme.font.fontSize } + 2px)`,
    top: 0,
    "@media all and (max-width: 1140px)": {
        backgroundColor: theme.colors.secondary,
    }
}))