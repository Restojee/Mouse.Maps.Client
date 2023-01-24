import { NavLink } from "@/layout/navigation/NavLink";
import { StyledNavLinkSection } from "@/layout/navigation/styles/StyledNavLinkSection";
import { MoonIcon } from "@/svg/MoonIcon";
import { StyledSidebar } from "@/layout/sidebar/styles/StyledSidebar";
import { SidebarSwitcher } from "@/layout/sidebar/SidebarSwitcher";
import { SidebarSection } from "@/layout/sidebar/SidebarSection";

export const Sidebar = () => {

    return (
        <StyledSidebar isOpen>
            <SidebarSwitcher />
            <SidebarSection
                label="Общие разделы"
                isOpen
            />
            <NavLink
                label="Все карты"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <SidebarSection
                label="Моя коллекция"
                isOpen
            />
            <NavLink
                label="Избранное"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Выполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Невыполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Прокоментированные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Карты с заметкой"
                prepend={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <SidebarSection
                label="Поиск по тегам"
                append={ (
                    <StyledNavLinkSection isOpen>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen
            />
            <NavLink
                label="Тег 1"
                append={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isExtended
            />
            <NavLink
                label="Тег 2"
                append={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isExtended
            />
            <NavLink
                label="Тег 3"
                append={ (
                    <StyledNavLinkSection>
                        <MoonIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isExtended
            />
        </StyledSidebar>
    )
}