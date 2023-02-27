import { Property } from "csstype";
import styled from "styled-components";

type Props = {
    margin?: Property.Margin;
    justifyContent?: Property.JustifyContent;
    gap?: Property.Gap;
    isOpen?: boolean;
    withBorder?: boolean
    isChecked?: boolean;
}
export const StyledNavLink = styled.div<Props>(({
  theme,
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
    margin: margin,
    justifyContent: justifyContent,
    ...withBorder && {
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: -5,
            right: 5,
            left: 5,
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
        }
    },
    ...isChecked && {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover": {
        backgroundColor: isOpen
            ? `rgba(255, 255, 255, 0.05)`
            : `rgba(255, 255, 255, 0.1)`
    }
}))