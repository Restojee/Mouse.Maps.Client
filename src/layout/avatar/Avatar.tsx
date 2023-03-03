import {StyledAvatar, StyledAvatarWrapper} from "@/layout/avatar/styles/StyledAvatar";

type Props = {
    size?: string;
}
export const Avatar = (props: Props) => {

    const { size = "80px" } = props

    return (
        <StyledAvatarWrapper>
            <StyledAvatar />
        </StyledAvatarWrapper>
    )
}