import {ReactNode} from "react";
import {Panel} from "@/layout/panel/Panel";
import {Drawer} from "@/layout/drawer/Drawer";
import {Sidebar} from "@/layout/sidebar/Sidebar";
import {StyledLayout, StyledWrapper} from "@/layout/StyledLayout";

type Props = {
    children: ReactNode;
}
export const Layout = (props: Props) => {

    const {children} = props;

    return (
        <StyledLayout>
            <Sidebar />
            <StyledWrapper>
                {children}
                <Drawer activeTab="notifications" />
            </StyledWrapper>
            <Panel activeTab="notifications" isOpen />
        </StyledLayout>
    )
}