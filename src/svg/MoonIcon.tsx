import React, { FC } from 'react';
import { SvgIconProps } from "@/svg/types";

export const MoonIcon: FC<Partial<SvgIconProps>> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4Z"
                fill="white"
            />
        </svg>
    );
}
