import {MoonIcon} from "@/svg/MoonIcon";
import {StyledSidebarSwitcher} from "@/layout/sidebar/styles/StyledSidebarSwitcher";

type Props = {
    onClick?: () => void;
}
export const SidebarSwitcher = (props : Props) => {
    const { onClick } = props;
    return (
        <StyledSidebarSwitcher onClick={ onClick }>
            <MoonIcon />
        </StyledSidebarSwitcher>
    )
}