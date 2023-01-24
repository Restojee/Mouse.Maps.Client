import { Avatar } from "@/layout/avatar/Avatar";
import { NavLink } from "@/layout/navigation/NavLink";
import { MoonIcon } from "@/svg/MoonIcon";
import { StyledNavLinkSection } from "@/layout/navigation/styles/StyledNavLinkSection";
import { StyledPanel } from "@/layout/panel/styles/StyledPanel";

type PanelProps = {
    activeTab: string;
    isOpen: boolean;
}
export const Panel = (props: PanelProps) => {
    return (
        <StyledPanel>
            <NavLink
                label="Все карты"
                prepend={
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                }
            />
            <Avatar size="46px" />
            <NavLink
                label="Все карты"
                prepend={(
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink
                label="Сменить тему"
                prepend={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
            />
            <NavLink
                label="Сменить тему"
                prepend={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
            />
        </StyledPanel>
    )
}