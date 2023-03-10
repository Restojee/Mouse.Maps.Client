import React, { useState } from 'react';
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { StyledPagePanelButton } from "@/layout/page/styles/StyledPagePanelButton";

type PropsType = {
    setActiveItem?: (isActive: boolean) => void,
    onClick?: () => void,
    icon?: React.ReactNode,
    activeIcon?: React.ReactNode,
    content?: React.ReactNode
}
export const PagePanelItem = (props: PropsType) => {
    const [isPagePanelItemOpen, setIsPagePanelItemOpen] = useState(false);

    const pagePanelItemClick = () => {
        setIsPagePanelItemOpen(!isPagePanelItemOpen);
    };
    return (
        <StyledBox>
            <StyledPagePanelButton onClick={pagePanelItemClick}>
                {props.icon}
                {isPagePanelItemOpen && props.activeIcon}
            </StyledPagePanelButton>
            {isPagePanelItemOpen && props.content}
        </StyledBox>
    );
}

export default PagePanelItem;
