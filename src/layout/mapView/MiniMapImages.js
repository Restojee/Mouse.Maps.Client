import React, { useContext, useEffect } from 'react';
import { Image } from '../../../components/Image';
import { AppContext } from '../../../providers/AppContext';
import { MiniMapImageContainer, MiniMapImagesContainer } from './mapViewElements';

export default function MiniMapImages({ activeMapId, miniMapActiveId, setMiniMapActiveId, setActiveImage }) {
    const { mapsCompleted, getMapsCompletedAsync } = useContext(AppContext);
    useEffect(() => getMapsCompletedAsync(), []);

    const mapsCompletedArray = mapsCompleted?.filter((item) => item.mapId === activeMapId);
    const onClickHandler = () => {
        setMiniMapActiveId(-1);
        setActiveImage(false);
    };
    const onClickImage = (image, id) => {
        setActiveImage(image);
        setMiniMapActiveId(id);
    };

    return (
        <MiniMapImagesContainer>
            <MiniMapImageContainer onClick={onClickHandler} active={miniMapActiveId === -1} name="Карта">
                Карта
            </MiniMapImageContainer>
            {mapsCompletedArray?.map((item) => (
                <MiniMapImageContainer
                    onClick={() => onClickImage(item.image, item.id)}
                    active={miniMapActiveId === item.id}
                    key={item.id}
                    spoiler
                    user={item.user}>
                    <Image src={item.image} />
                </MiniMapImageContainer>
            ))}
        </MiniMapImagesContainer>
    );
}
