import { NavLink } from "@/layout/navigation/NavLink";
import { StyledNavLinkSection } from "@/layout/navigation/styles/StyledNavLinkSection";
import { StyledSidebar } from "@/layout/sidebar/styles/StyledSidebar";
import { SidebarSwitcher } from "@/layout/sidebar/SidebarSwitcher";
import { SidebarSection } from "@/layout/sidebar/SidebarSection";
import {CommentFillIcon} from "@/svg/CommentFillIcon";
import {FavoriteIcon} from "@/svg/FavoriteIcon";
import {BookCheckFillIcon} from "@/svg/BookCheckFillIcon";
import {BookFillIcon} from "@/svg/BookFillIcon";
import {BookmarkIcon} from "@/svg/BookmarkIcon";
import {AddIcon} from "@/svg/AddIcon";
import {CloseIcon} from "@/svg/CloseIcon";
import {WidgetIcon} from "@/svg/WidgetIcon";
import {useState} from "react";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isPointBlockOpen, setIsPointBlockOpen] = useState(false);

    return (
        <StyledSidebar isOpen={isOpen}>
            <SidebarSwitcher
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            />
            <SidebarSection
                label="Общие разделы"
                isOpen={isOpen}
            />
            <NavLink
                label="Все карты"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <WidgetIcon/>
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <SidebarSection
                label="Моя коллекция"
                isOpen={isOpen}
            />
            <NavLink
                label="Избранное"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <FavoriteIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <NavLink
                label="Выполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookCheckFillIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <NavLink
                label="Невыполненные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookFillIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <NavLink
                label="Прокомментированные"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <CommentFillIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <NavLink
                label="Карты с заметкой"
                prepend={ (
                    <StyledNavLinkSection isOpen>
                        <BookmarkIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <SidebarSection
                label="Поиск по тегам"
                append={ (
                    <StyledNavLinkSection isOpen>
                        <AddIcon />
                    </StyledNavLinkSection>
                ) }
                isOpen={isOpen}
            />
            <NavLink
                label="Тег 1"
                append={ (
                    <StyledNavLinkSection>
                        <CloseIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isOpen={isOpen}
            />
            <NavLink
                label="Тег 2"
                append={ (
                    <StyledNavLinkSection>
                        <CloseIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isOpen={isOpen}
            />
            <NavLink
                label="Тег 3"
                append={ (
                    <StyledNavLinkSection>
                        <CloseIcon />
                    </StyledNavLinkSection>
                ) }
                justifyContent="space-between"
                isOpen={isOpen}
            />
        </StyledSidebar>
    )
}