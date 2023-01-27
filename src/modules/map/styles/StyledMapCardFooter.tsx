import { Property } from "csstype";
import styled from "styled-components";

type MapsCardPanelProps = {
    justify?: Property.JustifyContent,
}
export const StyledMapCardFooter = styled.div<MapsCardPanelProps>(props => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
    columnGap: "5px",
    color: "rgba(255, 255, 255, 0.9)",
    width: "100%",
    position: "absolute",
    justifyContent: props.justify,
    zIndex: props.theme.order.other,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
    bottom: 0,
    padding: "10px"
}))