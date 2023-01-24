import styled from "styled-components";

export type Props = {
    isOpen: boolean;
}
export const StyledSidebarSwitcher = styled.div<Partial<Props>>(({ isOpen }) => ({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    height: "min-content",
    padding: "10px",
    cursor: "pointer",
    svg: {
        transition: "0.3s",
        "&:hover": {
            transform: "translateX(10px)"
        }
    },
    ...isOpen && {
        svg: {
            transform: "rotate(180deg)",
            "&:hover": {
                transform: "rotate(180deg) translateX(10px)",
            }
        }
    }
}))