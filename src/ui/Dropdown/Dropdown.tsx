import React, { useState } from 'react';
import { DropdownContainer, DropdownList } from './dropdownElements';
import DropdownItem from './DropdownItem';
import { ArrowIcon } from "@/svg/ArrowIcon";
import FormElement from "@/ui/Form/Form";

export default function Dropdown( props: any ) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    const InputClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const ItemClick = (index: number) => {
        setIsDropdownOpen(!isDropdownOpen);
        setSelectedItem(index);
    };

    return (
        <DropdownContainer width={props.width} isOpen={isDropdownOpen}>
            <FormElement
                readOnly
                isOpen={isDropdownOpen}
                onClick={InputClick}
                placeholder={props.dropdownItemsArray[selectedItem].label}
                name="selected"
                type="text"
                leftIcon={props.leftIcon}
                rightIcon={props.rightIcon || <ArrowIcon color="gray" rotate={isDropdownOpen ? '270deg' : '90deg'} />}
            />
            {isDropdownOpen && (
                <DropdownList width="100%" isOpen={isDropdownOpen}>
                    {props.dropdownItemsArray.map((obj:any, index: any) => (
                        <DropdownItem {...obj} key={index} onClick={() => ItemClick(index)} />
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
}
