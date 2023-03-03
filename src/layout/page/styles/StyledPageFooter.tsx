import { ReactNode } from "react";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { PagePanelSection } from "@/layout/page/PagePanelSection";
import { StyledPagePanel } from "@/layout/page/styles/StyledPagePanel";

type Props = {
    children: ReactNode;
}
export const PageFooter = (props: Partial<Props>) => {
    return (
        <StyledPagePanel top>
            <StyledBox width="100%" justify="space-between">
                <StyledBox>
                </StyledBox>
                <StyledBox>
                    <PagePanelSection />
                    <PagePanelSection />
                </StyledBox>
            </StyledBox>
        </StyledPagePanel>
    )
}