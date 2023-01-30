import React, { FC } from 'react';
import { SvgIconPropsType } from "@/svg/types";

export const CloseIcon: FC<SvgIconPropsType> = (props) => {
    return (
        <svg
            width={props.size || '24px'}
            height={props.size || '24px'}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="12"
                cy="12"
                r="8.4"
                stroke="#7E869E"
                strokeOpacity="0.25"
                strokeWidth="1.2"
            />
            <path
                d="M9.00009 14.9997L15.0001 8.99966"
                stroke={props.color || 'white'}
                strokeWidth="1.2"
            />
            <path d="M15 15L9 9" stroke={props.color || 'white'} strokeWidth="1.2" />
        </svg>
    );
}
