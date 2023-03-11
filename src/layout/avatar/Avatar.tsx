import {StyledAvatar} from "@/layout/avatar/styles/StyledAvatar";
import {Property} from "csstype";
import { StaticImageData } from "next/image";

type Props = {
    size?: Property.Width;
    image?: any;
    src?: string
    margin?: Property.Margin;
    border?: boolean
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