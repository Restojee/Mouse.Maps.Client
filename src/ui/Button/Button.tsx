import { ReactElement } from "react";
import {
    StyledButton,
    StyledButtonProps
} from "@/ui/Button/styles/StyledButton";
import { Typography } from "../Typography/styles/Typography";

type ButtonProps = {
    append?: ReactElement;
    prepend?: ReactElement;
    label?: string;
    type?: "button" | "submit";
    onClick?: () => void;
}
export const Button = (props: ButtonProps & StyledButtonProps) => {

    const { label, append, prepend, onClick, type = "button", ...styleProps } = props;

    return (
        <StyledButton onClick={ onClick } type={ type } { ...styleProps } >
            { prepend }
            <Typography isEllipsis>{ label }</Typography>
            { append }
        </StyledButton>
    )
}
