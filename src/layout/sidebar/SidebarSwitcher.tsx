import {StyledSidebarSwitcher} from "@/layout/sidebar/styles/StyledSidebarSwitcher";
import {LeftSidebarArrowIcon} from "@/svg/SidebarArrowIcon";

type Props = {
    onClick?: () => void;
}
export const SidebarSwitcher = (props : Props) => {
    const { onClick } = props;
    return (
        <StyledSidebarSwitcher onClick={ onClick }>
            <LeftSidebarArrowIcon />
        </StyledSidebarSwitcher>
    )
}