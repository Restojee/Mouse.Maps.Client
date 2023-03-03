import styled from "styled-components";

export const StyledDrawerHeader = styled.div(props => ({
    padding: "20px",
    backgroundColor: "inherit",
    borderRadius: "inherit",
    position: "sticky",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: `calc(${ props.theme.font.fontSize } + 2px)`,
    top: 0
}))