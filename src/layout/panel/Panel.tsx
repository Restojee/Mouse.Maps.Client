import {Avatar} from "@/layout/avatar/Avatar";
import {NavLink} from "@/layout/navigation/NavLink";
import {MoonIcon} from "@/svg/MoonIcon";
import {StyledNavLinkSection} from "@/layout/navigation/styles/StyledNavLinkSection";
import {StyledPanel} from "@/layout/panel/styles/StyledPanel";
import {BurgerIcon} from "@/svg/BurgerIcon";
import {NotificationsIcon} from "@/svg/NotificationIcons";
import {ChartIcon} from "@/svg/ChartIcon";
import {PaperIcon} from "@/svg/PaperIcon";
import {ChatFillIcon} from "@/svg/ChatFillIcon";
import {SettingsIcon} from "@/svg/SettingsIcon";
import {LogInIcon} from "@/svg/LogInIcon";

type PanelProps = {
    activeTab: string;
    isOpen: boolean;
}
export const Panel = (props: PanelProps) => {

    return (
        <StyledPanel>
            <NavLink
                label="Открыть/Скрыть панель"
                prepend={
                    <StyledNavLinkSection>
                        <BurgerIcon />
                    </StyledNavLinkSection>
                }
            />
            <Avatar size="46px" />
            <NavLink
                label="Уведомления"
                prepend={(
                    <StyledNavLinkSection>
                        <NotificationsIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink
                label="Полезная инфа"
                prepend={(
                    <StyledNavLinkSection>
                        <PaperIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink
                label="Статистика"
                prepend={(
                    <StyledNavLinkSection>
                        <ChartIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink
                label="Чат"
                prepend={(
                    <StyledNavLinkSection>
                        <ChatFillIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink
                label="Настройки"
                margin={"auto 0 0 0"}
                prepend={(
                    <StyledNavLinkSection>
                        <SettingsIcon />
                    </StyledNavLinkSection>
                )}
            />
            <NavLink border
                     label="Сменить тему"
                     prepend={(
                         <StyledNavLinkSection>
                             <MoonIcon />
                         </StyledNavLinkSection>
                     )}
            />
            <NavLink
                label="Выйти/войти"
                prepend={(
                    <StyledNavLinkSection>
                        <LogInIcon />
                    </StyledNavLinkSection>
                )}
            />
        </StyledPanel>
    )
}