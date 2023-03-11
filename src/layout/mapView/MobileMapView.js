import React from 'react';
import CopyIcon from '../../../assets/icons/svg/CopyIcon';
import { IconButton } from '../../../assets/icons/svg/IconsSettings/IconButton';
import { Avatar } from '../../../components/Avatar';
import Flex from '../../../components/Flex';
import { Image, ImageContainer } from '../../../components/Image';
import MessageContainer from '../../../components/Messages/Messages';
import MessageSendFormContainer from '../../../components/Messages/MessagesSendForm';
import { ScrollContainer, ScrollWrapper } from '../../../components/ScrollContainer';
import { Tag, TagsContainer } from '../../../components/Tag';
import { Text, Title } from '../../../components/Text';
import { baseTheme } from '../../../styles/theme';
import { mapViewInfoArray, panelIconsArray } from './mapsViewArrays';
import mapTags from '../../../assets/resources/maps/mapTags';
import {
    MobileMapViewContainer,
    MobileMapViewMainBlock,
    MobileMapViewSidebarBlock,
    MapViewSidebarBlockPanel,
    MapViewSidebarBlockPanelIcons,
    MapViewTextarea,
} from './mapViewElements';
import EditFillIcon from '../../../assets/icons/svg/EditFillIcon';
import mapComments from '../../../assets/resources/maps/mapComments';
import { Drawer } from '../../../components/Drawer';
import MiniMapImages from './MiniMapImages';
import noneImage from '../../../assets/images/noneImage.jpg';

function MobileMapView({
    onClick,
    activeMapId,
    messages,
    name,
    commentCount,
    visitCount,
    completeCount,
    image,
    user,
    date,
    miniMapActiveId,
    setMiniMapActiveId,
    activeImage,
    setActiveImage,
}) {
    return (
        <MobileMapViewContainer>
            <Drawer onClick={() => onClick()} padding="30px 20px 10px 20px" />
            <MobileMapViewMainBlock gap="30px">
                <Flex align="center" gap="20px">
                    <Avatar border borderColor={baseTheme.colors.neutral} size="70px" src="https://i.imgur.com/P11sXfz.png" />
                    <Flex direction="column">
                        <Title link ellipsis addSize="4px" weight="bold">
                            {user}
                        </Title>
                        <Text>{date}</Text>
                    </Flex>
                </Flex>
                <Flex align="center" justify="space-between">
                    <Flex align="center">
                        <Title addsize="18px">!map {name}</Title>
                        <IconButton opacity="0.6">
                            <CopyIcon />
                        </IconButton>
                    </Flex>
                    <Flex gap="15px" align="center" opacity="0.6">
                        {mapViewInfoArray.map(({ icon, title, count }, index) => (
                            <Flex key={index} gap="5px" align="center" title={title}>
                                {icon}
                                <Text>{count}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <ImageContainer bg={baseTheme.colors.mapBg} maxHeight="400px">
                    <Image src={activeImage || image || noneImage} />
                </ImageContainer>
                <ScrollWrapper slider>
                    <ScrollContainer>
                        <Flex>
                            <MiniMapImages
                                miniMapActiveId={miniMapActiveId}
                                setMiniMapActiveId={(value) => setMiniMapActiveId(value)}
                                activeMapId={activeMapId}
                                setActiveImage={setActiveImage}
                            />
                        </Flex>
                    </ScrollContainer>
                </ScrollWrapper>
                <TagsContainer>
                    {mapTags.map(({ label, id }) => (
                        <Tag small key={id} bgColor={baseTheme.colors.primaryLighter}>
                            <Text ellipsis>{label}</Text>
                        </Tag>
                    ))}
                    <IconButton>
                        <EditFillIcon color={baseTheme.colors.brandColor} />
                    </IconButton>
                </TagsContainer>
                <MapViewTextarea placeholder="Нажмите, чтобы написать заметку..." />
            </MobileMapViewMainBlock>
            <MobileMapViewSidebarBlock gap="0">
                <MapViewSidebarBlockPanel gap="0">
                    {panelIconsArray.map(({ icon }, index) => (
                        <MapViewSidebarBlockPanelIcons key={index}>{icon}</MapViewSidebarBlockPanelIcons>
                    ))}
                </MapViewSidebarBlockPanel>
                <Flex padding="20px">
                    <Title weight="bold">Все комментарии</Title>
                </Flex>
                <Flex>
                    <ScrollWrapper maxHeight="70vh">
                        <ScrollContainer padding=" 10px 20px">
                            {mapComments.map((obj) => (
                                <MessageContainer key={obj.id} {...obj} />
                            ))}
                        </ScrollContainer>
                    </ScrollWrapper>
                </Flex>
                <MessageSendFormContainer />
            </MobileMapViewSidebarBlock>
        </MobileMapViewContainer>
    );
}

export default MobileMapView;
