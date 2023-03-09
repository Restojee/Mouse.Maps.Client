import { ReactElement } from "react";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { PagePanelSection } from "@/layout/page/PagePanelSection";
import { StyledPagePanel } from "@/layout/page/styles/StyledPagePanel";
import Dropdown from "@/ui/Dropdown/Dropdown";

type Props = {
    children: ReactElement;
}
export const PageHeader = (props: Partial<Props>) => {
    return (
        <StyledPagePanel bottom>
            <StyledBox width="100%" justify="space-between">
                <StyledBox>
                    <Dropdown dropdownItemsArray={dropdownMapsPage} width="150px" />
                </StyledBox>
                <StyledBox>
                    <PagePanelSection />
                    <PagePanelSection />
                </StyledBox>
            </StyledBox>
        </StyledPagePanel>
    )
}

const dropdownMapsPage= [
    {
        "id": 0,
        "label": "Все карты"
    },
    {
        "id": 1,
        "label": "В ожидании"
    }
]
