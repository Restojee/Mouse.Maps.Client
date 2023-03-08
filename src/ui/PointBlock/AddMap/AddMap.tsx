import React from 'react';
import EditFillIcon from '../../../assets/icons/svg/EditFillIcon';
import { IconButton } from '../../../assets/icons/svg/IconsSettings/IconButton';
import { baseTheme } from '../../../styles/theme';
import Flex from '../../Flex';
import ImageForm from '../../ImageForm/ImageForm';
import { Tag, TagsContainer } from '../../Tag';
import { Text } from '../../Text';

function AddMap(props) {
    return (
        <Flex gap="15px" direction="column">
            <ImageForm />
            <TagsContainer>
                <Text>Теги: </Text>
                <Tag small>Тег</Tag>
                <IconButton>
                    <EditFillIcon color={baseTheme.colors.iconOnSecondary} size="20px" />
                </IconButton>
            </TagsContainer>
        </Flex>
    );
}

export default AddMap;
