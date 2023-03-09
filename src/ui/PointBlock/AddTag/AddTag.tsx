import React from 'react';
import FormElement from '../../Form/Form';
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { Button } from "@/ui/Button/Button";
import { useTheme } from "styled-components";
import { DefaultTheme } from "@/layout/theme/constants";
import { DoneRoundIcon } from "@/svg/DoneRoundIcon";

export const AddTag = () => {
    const theme = useTheme() as typeof DefaultTheme

    return (
        <StyledBox gap="15px">
            <FormElement placeholder="Введите название..." />
            <Button bgColor={theme.colors.status.success} prepend={<DoneRoundIcon />} />
        </StyledBox>
    );
}

export default AddTag;
