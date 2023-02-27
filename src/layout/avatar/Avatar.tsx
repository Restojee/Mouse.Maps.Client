import {StyledAvatar} from "@/layout/avatar/styles/StyledAvatar";
import {Property} from "csstype";

type Props = {
    size?: Property.Width;
    image: string;
    margin?: Property.Margin
}
export const Avatar = (props: Props) => {

    const {size = "80px", image, margin} = props

    return (
        <StyledAvatar
            size={size}
            margin={margin}
            src={image}
            alt={"avatar"}
        />
    )
}