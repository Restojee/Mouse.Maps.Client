import React, {FC} from 'react';
import { SvgIconPropsType } from "@/svg/types";

const UsersIcon: FC<SvgIconPropsType> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                stroke={props.color || '#fff'}
                d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
            <circle
                fill={props.color || '#7E869E'}
                stroke={props.color || '#fff'}
                cx="12"
                cy="8"
                r="4"
                fillOpacity="0.25"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default UsersIcon;