import { ReactNode} from "react";
import { Panel } from "@/layout/panel/Panel";
import { Drawer } from "@/layout/drawer/Drawer";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import { StyledLayout } from "@/layout/StyledLayout";

type Props = {
    children: ReactNode;
}
export const Layout = (props: Props) => {

    const { children } = props;

    return (
        <StyledLayout>
            <Sidebar />
            { children }
            <Drawer activeTab="notifications" />
            <Panel activeTab="notifications" isOpen />
        </StyledLayout>
    )
}