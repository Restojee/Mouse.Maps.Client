import styled from "styled-components";

export const StyledDrawer = styled.div(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.secondaryDark,
    borderRadius: "0px 20px 20px 0px",
    height: "calc(100% - 20px)",
    padding: 0,
    margin: "10px 0 10px 0",
    width: theme.sizes.rightSidebar.width,
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    zIndex: theme.order.rightSidebar,
    "@media all and (max-width: 1140px)": {
        position: "fixed",
        right: `calc(${theme.sizes.sitePanel.width} + 5px)`,
        top: 5,
        bottom: 5,
        height: "initial",
        backgroundColor: theme.colors.secondary,
        boxShadow: "0 0 20px 1px rgba(0, 0, 0, 0.3)",
        borderRadius: theme.blockSettings.siteBorder,
    },
    "@media all and (maxWidth: 600px)": {
        right: 10,
        top: 10,
        margin: 0,
        left: 10,
        bottom: `calc(${theme.sizes.sitePanel.width} + 15px)`,
        width: "auto",
    }
}));