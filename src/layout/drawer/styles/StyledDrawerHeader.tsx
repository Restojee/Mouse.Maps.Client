import styled from "styled-components";

export const StyledDrawerHeader = styled.div(({theme}) => ({
    padding: "20px",
    backgroundColor: theme.colors.secondary,
    borderRadius: "inherit",
    zIndex: 1,
    position: "sticky",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: `calc(${ theme.font.fontSize } + 2px)`,
    top: 0
}))