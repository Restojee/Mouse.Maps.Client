import styled from "styled-components";

export type StyledButtonIconProps = {
    isCircle?: boolean;
}
export const StyledButtonIcon = styled.div<StyledButtonIconProps>(props=> ({
    ...props.isCircle && {
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "min-content",
        borderRadius: "50%",
        padding: 2,
    }
}))