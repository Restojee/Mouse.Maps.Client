import styled from "styled-components";

export const StyledPageWrapper = styled.div(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    flexGrow: 1,
    backgroundColor: theme.colors.secondary,
    [`@media all and (max-width: ${ theme.sizes.media.medium }px)`]: {
        marginBottom: 0
    }
}))