import {ReactElement} from "react";
import {Property} from "csstype";
import {StyledNavLink} from "@/layout/navigation/styles/StyledNavLink";
import {Typography} from "@/ui/Typography/styles/Typography";

type NavLinkProps = {
    label: string;
    prepend?: ReactElement;
    append?: ReactElement;
    isExtended?: boolean;
    isChecked?: boolean;
    border?: boolean;

    margin?: Property.Margin;
    gap?: Property.Gap;
    justifyContent?: Property.JustifyContent;

    isDisabled?: boolean;
    isVisible?: boolean;

    onClick?: () => void;
}
export const NavLink = (props: NavLinkProps) => {

    const {
        label,
        prepend,
        append,
        margin,
        border,
        isExtended,
        isChecked,
        justifyContent,
        isDisabled,
        onClick,
        gap = "15px"
    } = props;

    return (
        <StyledNavLink
            margin={ margin }
            withBorder={ border }
            gap={ gap }
            justifyContent={ justifyContent }
            onClick={ isDisabled ? undefined : onClick }
        >
            { prepend }

            { isExtended && <Typography>{ label }</Typography> }

            { append }
        </StyledNavLink>
    )
}