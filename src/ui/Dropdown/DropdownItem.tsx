import React from 'react';
import { DropdownItemStyled } from './dropdownElements';
import { Typography } from "@/ui/Typography/styles/Typography";

type PropsType = {
    onClick: () => void,
    isOpen: boolean,
    index: string,
    label: string,
    leftIcon: boolean,
    rightIcon: boolean
}

function DropdownItem(props: PropsType) {
    const ItemClick = () => {
        props.onClick();
    };

    return (
        <>
            { props.label ? (
                <DropdownItemStyled key={ props.index } onClick={ () => ItemClick() }>
                    {/*{ props.leftIcon && <StyledIconContainer left>{ props.leftIcon }</StyledIconContainer> }*/}
                    <Typography>{ props.label }</Typography>
                    {/*<StyledIconButton right>{ props.rightIcon }</StyledIconButton>*/}
                </DropdownItemStyled>
            ) : (
                <DropdownItemStyled blockedItem onClick={ () => ItemClick() }>
                    <Typography>Не найдено</Typography>
                </DropdownItemStyled>
            ) }
        </>
    );
}

export default DropdownItem;
