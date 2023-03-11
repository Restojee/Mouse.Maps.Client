import { ReactNode, useState } from "react";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { PagePanelSection } from "@/layout/page/PagePanelSection";
import {
    StyledPagePanel,
    StyledPanelPointBlockWrapper
} from "@/layout/page/styles/StyledPagePanel";
import { AddRoundIcon } from "@/svg/AddRoundIcon";
import { useTheme } from "styled-components";
import PagePanelItem from "@/layout/page/PagePanelItem";
import FormElement from "@/ui/Form/Form";
import { AddImageIcon } from "@/svg/AddImageIcon";
import { PointBlock } from "@/ui/PointBlock/PointBlock";
import { DefaultTheme } from "@/layout/theme/constants";

type Props = {
    children: ReactNode;
}
export const PageFooter = (props: Partial<Props>) => {
    const [isPointBlockOpen, setIsPointBlockOpen] = useState(false);
    const [isPointBlockSettingsOpen, setIsPointBlockSettingsOpen] = useState(false);

    const theme = useTheme() as typeof DefaultTheme

    const openPointBlockClickHandler = () => {
        setIsPointBlockOpen(!isPointBlockOpen);
    };

    const addImageClickHandler = () => {
        setIsPointBlockSettingsOpen(!isPointBlockSettingsOpen);
    };

    return (
        <StyledPagePanel top>
            <StyledBox width="100%" justify="space-between">
                <PagePanelItem
                    icon={ <AddRoundIcon onClick={openPointBlockClickHandler} color={ theme.colors.primary } /> }
                    content={
                        <StyledPanelPointBlockWrapper>
                            <FormElement
                                rightIcon={ <AddImageIcon onClick={ addImageClickHandler } color="gray" /> }
                                placeholder="Номер карты @123456"
                            />
                            { <PointBlock isVisible={isPointBlockSettingsOpen} type="addMap" /> }
                        </StyledPanelPointBlockWrapper>
                    }
                />
                <StyledBox>
                    <PagePanelSection />
                    <PagePanelSection />
                </StyledBox>
            </StyledBox>
        </StyledPagePanel>
    )
}