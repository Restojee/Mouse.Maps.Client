import { ReactElement } from "react";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { PagePanelSection } from "@/layout/page/PagePanelSection";
import { StyledPagePanel } from "@/layout/page/styles/StyledPagePanel";

type Props = {
    children: ReactElement;
}
export const PageHeader = (props: Partial<Props>) => {
    return (
        <StyledPagePanel bottom>
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