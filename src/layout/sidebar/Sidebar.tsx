import { NavLink } from "@/layout/navigation/NavLink";
import { StyledNavLinkSection } from "@/layout/navigation/styles/StyledNavLinkSection";
import { MoonIcon } from "@/svg/MoonIcon";
import { StyledSidebar } from "@/layout/sidebar/styles/StyledSidebar";
import { SidebarSwitcher } from "@/layout/sidebar/SidebarSwitcher";
import { SidebarSection } from "@/layout/sidebar/SidebarSection";
import FavoriteIcon from "../../svg/FavoriteIcon";
import BookCheckIcon from "@/svg/BookCheckIcon";
import BookmarkIcon from "@/svg/BookmarkIcon";
import CommentIcon from "@/svg/CommentIcon";
import { AddIcon } from "@/svg/AddIcon";
import OpenBookIcon from "@/svg/OpenBookIcon";
import BookFillIcon from "@/svg/BookFillIcon";
import {CommentFillIcon} from "@/svg/CommentFillIcon";
import BookCheckFillIcon from "@/svg/BookCheckFillIcon";

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
                        <FavoriteIcon />
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
                        <FavoriteIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Выполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookCheckFillIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Невыполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookFillIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Прокоментированные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <CommentFillIcon />
                    </StyledNavLinkSection>
                ) }
                isExtended
            />
            <NavLink
                label="Карты с заметкой"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookmarkIcon />
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