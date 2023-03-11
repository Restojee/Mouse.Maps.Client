import MobileMapView from './MobileMapView';
import DesktopMapView from './DesktopMapView';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../providers/AppContext';

function MapView({ activeMapId, onClick }) {
    const { maps, getMapsAsync } = useContext(AppContext);
    const map = maps.find((item) => item.id === activeMapId);

    const [miniMapActiveId, setMiniMapActiveId] = useState(-1);
    const [activeImage, setActiveImage] = useState(false);

    useEffect(() => getMapsAsync(), []);
    return (
        <>
            {window.innerWidth > 780 ? (
                <DesktopMapView
                    image={map.image}
                    user={map.user}
                    date={map.date}
                    name={map.name}
                    activeMapId={activeMapId}
                    onClick={onClick}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    miniMapActiveId={miniMapActiveId}
                    setMiniMapActiveId={setMiniMapActiveId}
                />
            ) : (
                <MobileMapView
                    image={map.image}
                    user={map.user}
                    date={map.date}
                    name={map.name}
                    activeMapId={activeMapId}
                    onClick={onClick}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    miniMapActiveId={miniMapActiveId}
                    setMiniMapActiveId={setMiniMapActiveId}
                />
            )}
        </>
    );
}

export default MapView;
