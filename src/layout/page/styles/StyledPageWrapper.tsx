import styled from "styled-components";

export const StyledPageWrapper = styled.div(({ theme, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 20px)",
    overflow: "hidden",
    margin: "10px 0",
    flexGrow: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: "20px 0 0 20px",
    [`@media all and (max-width: ${ theme.sizes.media.medium }px)`]: {
        marginBottom: 0
    }
}))