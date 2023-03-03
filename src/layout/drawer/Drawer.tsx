import {StyledDrawer} from "@/layout/drawer/styles/StyledDrawer";
import {ReactNode} from "react";
import {TabsType} from "@/layout/panel/Panel";
import {Notifications} from "@/layout/drawer/Notifications/Notifications";
import {Info} from "@/layout/drawer/Info/Info";

type Props = {
    activeTab: TabsType,
    isOpen: boolean
}
export const Drawer = (props: Props) => {
    return (
        <StyledDrawer isOpen={props.isOpen}>
            {getTabsContent(props.activeTab)}
        </StyledDrawer>
    )
}

const getTabsContent = (tab: TabsType): ReactNode => {
    const tabs: TabsContentType[] = [
        {
            component: <Notifications />,
            tab: 'notifications',
        },
        {
            component: <Info />,
            tab: 'info',
        },
        {
            component: <>Статистика</>,
            tab: 'statistic',
        },
        {
            component: <>Чат</>,
            tab: 'chat',
        },
        {
            component: <>Настройки</>,
            tab: 'settings',
        }
    ]

    return tabs.find(el => el.tab === tab)?.component
}

type TabsContentType = {
    component: ReactNode,
    tab: TabsType,
}