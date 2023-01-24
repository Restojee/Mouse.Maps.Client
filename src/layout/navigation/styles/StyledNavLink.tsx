import { Property } from "csstype";
import styled from "styled-components";

type Props = {
    margin?: Property.Margin;
    marginTop?: Property.MarginTop;
    justifyContent?: Property.JustifyContent;
    gap?: Property.Gap;

    isOpen?: boolean;
    withBorder?: boolean
    isChecked?: boolean;
}
export const StyledNavLink = styled.div<Props>(({
  theme,
  marginTop,
  margin,
  isOpen,
  withBorder,
  gap,
  isChecked,
  justifyContent
}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px",
    borderRadius: "10px",
    position: "relative",
    cursor: "pointer",
    transition: "transition",
    gap: gap,
    marginBottom: isOpen ? `2px` : `10px`,
    marginTop: marginTop,
    margin: margin,
    justifyContent: justifyContent,
    ...withBorder && {
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: -5,
            right: 0,
            width: "100%",
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
        }
    },
    ...isChecked && {
        backgroundColor: isOpen
            ? `rgba(255, 255, 255, 0.05)`
            : `rgba(255, 255, 255, 0.1)`,
        pointerEvents: "none"
    },
    "&:hover": {
        backgroundColor: isOpen
            ? `rgba(255, 255, 255, 0.05)`
            : `rgba(255, 255, 255, 0.1)`
    }
}))