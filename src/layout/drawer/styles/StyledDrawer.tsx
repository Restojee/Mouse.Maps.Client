import styled from "styled-components";

export const StyledDrawer = styled.div<{isOpen: boolean}>(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.secondaryDark,
    height: "100%",
    padding: 0,
    width: theme.sizes.rightSidebar.width,
    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    zIndex: theme.order.rightSidebar,
    "@media all and (max-width: 1140px)": {
        position: "fixed",
        right: `calc(${theme.sizes.sitePanel.width} + 5px)`,
        top: 15,
        height: "initial",
        bottom: 15,
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