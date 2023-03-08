import { ReactNode, useState } from "react";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { PagePanelSection } from "@/layout/page/PagePanelSection";
import { StyledPagePanel } from "@/layout/page/styles/StyledPagePanel";
import { AddRoundIcon } from "@/svg/AddRoundIcon";
import { DefaultTheme, useTheme } from "styled-components";
import PagePanelItem from "@/layout/page/PagePanelItem";
import FormElement from "@/ui/Form/Form";
import { AddImageIcon } from "@/svg/AddImageIcon";

type Props = {
    children: ReactNode;
}
export const PageFooter = (props: Partial<Props>) => {
    const [isPointBlockOpen, setIsPointBlockOpen] = useState(false);

    const theme = useTheme()

    const pointBlock = () => {
        setIsPointBlockOpen(!isPointBlockOpen);
    };

    return (
        <StyledPagePanel top>
            <StyledBox width="100%" justify="space-between">
                <StyledBox>
                    <PagePanelItem
                        icon={<AddRoundIcon color={theme.colors.primary} />}
                        content={
                            <FormElement
                                rightIcon={<AddImageIcon onClick={pointBlock} color="gray" />}
                                placeholder="Номер карты @123456"
                            />
                        }
                    />
                    {isPointBlockOpen && <PointBlock type="addMap" />}
                </StyledBox>
                <StyledBox>
                    <PagePanelSection />
                    <PagePanelSection />
                </StyledBox>
            </StyledBox>
        </StyledPagePanel>
    )
}