import React from 'react';
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { Typography } from '@/ui/Typography/styles/Typography';
import { useTheme } from "styled-components";
import { DefaultTheme } from "@/layout/theme/constants";
import { EditFillIcon } from "@/svg/EditFillIcon";
import { ImageForm } from "@/ui/ImageForm/ImageForm";
import { StyledTag, StyledTagsContainer } from "@/ui/Tag/styled";
import { StyledButtonIcon } from "@/ui/Button/styles/StyledButtonIcon";

export const AddMap = () => {
    const theme = useTheme() as typeof DefaultTheme

    return (
        <StyledBox gap="15px" direction="column">
            <ImageForm />
            <StyledTagsContainer>
                <Typography>Теги: </Typography>
                <StyledTag small>Тег</StyledTag>
                <StyledButtonIcon>
                    <EditFillIcon color={theme.colors.iconOnSecondary} size="20px" />
                </StyledButtonIcon>
            </StyledTagsContainer>
        </StyledBox>
    );
}
