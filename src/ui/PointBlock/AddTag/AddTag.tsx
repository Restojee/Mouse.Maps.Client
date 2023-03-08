import React from 'react';
import DoneRoundIcon from '../../../assets/icons/svg/DoneRoundIcon';
import { baseTheme } from '../../../styles/theme';
import Button from '../../Buttons/Button';
import Flex from '../../Flex';
import FormElement from '../../Form/Form';

function AddTag(props) {
    return (
        <Flex gap="15px">
            <FormElement placeholder="Введите название..." />
            <Button bgColor={baseTheme.colors.success} icon={<DoneRoundIcon />} />
        </Flex>
    );
}

export default AddTag;
