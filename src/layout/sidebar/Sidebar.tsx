import {NavLink} from "@/layout/navigation/NavLink";
import {StyledNavLinkSection} from "@/layout/navigation/styles/StyledNavLinkSection";
import {StyledSidebar} from "@/layout/sidebar/styles/StyledSidebar";
import {SidebarSwitcher} from "@/layout/sidebar/SidebarSwitcher";
import {SidebarSection} from "@/layout/sidebar/SidebarSection";
import {CommentFillIcon} from "@/svg/CommentFillIcon";
import {FavoriteIcon} from "@/svg/FavoriteIcon";
import {BookCheckFillIcon} from "@/svg/BookCheckFillIcon";
import {BookFillIcon} from "@/svg/BookFillIcon";
import {BookmarkIcon} from "@/svg/BookmarkIcon";
import {AddIcon} from "@/svg/AddIcon";
import {CloseIcon} from "@/svg/CloseIcon";
import {WidgetIcon} from "@/svg/WidgetIcon";
import {useState} from "react";
import {StyledBox} from "@/ui/Box/styles/StyledBox";
import {StyledSidebarLogo} from "@/layout/sidebar/styles/StyledSidebarLogo";
import {sidebarTags} from "@/moc/sidebarMoc";
import {ScrollBox} from "@/ui/ScrollBox/ScrollBox";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isPointBlockOpen, setIsPointBlockOpen] = useState(false);

    return (
        <StyledSidebar isOpen={isOpen}>
            <SidebarSwitcher
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            />
            <StyledBox direction={"column"} gap={isOpen ? 5 : 10}>
                <SidebarSection
                    label="Общие разделы"
                    isOpen={isOpen}
                />
                <NavLink
                    label="Все карты"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <WidgetIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
            </StyledBox>
            <StyledBox
                margin={isOpen ? "0" : "-10px 0 0 0"}
                direction={"column"}
                gap={isOpen ? 5 : 10}
            >
                <SidebarSection
                    label="Моя коллекция"
                    isOpen={isOpen}
                />
                <NavLink
                    label="Избранное"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <FavoriteIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
                <NavLink
                    label="Выполненные"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <BookCheckFillIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
                <NavLink
                    label="Невыполненные"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <BookFillIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
                <NavLink
                    label="Прокомментированные"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <CommentFillIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
                <NavLink
                    label="Карты с заметкой"
                    prepend={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <BookmarkIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
            </StyledBox>
            <StyledBox
                direction={"column"}
                gap={0}
                opacity={isOpen ? 1 : 0}
                overflow={"hidden"}
            >
                <SidebarSection
                    label="Поиск по тегам"
                    append={(
                        <StyledNavLinkSection isOpen={isOpen}>
                            <AddIcon />
                        </StyledNavLinkSection>
                    )}
                    isOpen={isOpen}
                />
                <ScrollBox>
                    {sidebarTags.map(el => (
                        <NavLink
                            key={el.id}
                            label={el.label}
                            isChecked={el.isChecked}
                            append={(
                                <StyledNavLinkSection>
                                    <CloseIcon />
                                </StyledNavLinkSection>
                            )}
                            justifyContent="space-between"
                            isOpen={isOpen}
                        />
                    ))}
                </ScrollBox>
            </StyledBox>
            <StyledSidebarLogo isOpen={isOpen}>Maps</StyledSidebarLogo>
        </StyledSidebar>
    )
}