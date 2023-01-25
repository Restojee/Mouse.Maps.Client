import React, {FC} from 'react';
import { SvgIconPropsType } from "@/svg/types";

const SearchIcon: FC<SvgIconPropsType> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle stroke={props.color || '#CCD2E3'} cx="11" cy="11" r="7" strokeWidth="2" />
            <path
                stroke={props.color || '#CCD2E3'}
                d="M20 20L17 17"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default SearchIcon;
