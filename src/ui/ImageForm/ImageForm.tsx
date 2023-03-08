import React from 'react';
import { StyledImageFormContainer, StyledImageFormLink } from "@/ui/ImageForm/ImageFormElements";

export const ImageForm = () => {
    return (
        <StyledImageFormContainer>
            <StyledImageFormLink>Загрузите</StyledImageFormLink>
            <span> или перетащите изображение</span>
        </StyledImageFormContainer>
    );
}
