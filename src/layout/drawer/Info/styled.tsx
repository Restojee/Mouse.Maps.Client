import styled from "styled-components";

export const StyledInfoList = styled.div({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    maxHeight: "100%",
})
export const StyledInfoBlock = styled.div(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.secondary,
    padding: 15,
    borderRadius: 15,
    "@media all and (max-width: 1140px)": {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
    }
}))
