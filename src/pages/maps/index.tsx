import { Layout } from "@/layout/Layout";
import { PageHeader } from "@/layout/page/PageHeader";
import { StyledPageWrapper } from "@/layout/page/styles/StyledPageWrapper";
import { StyledPageContent } from "@/layout/page/styles/StyledPageContent";
import { MapCard } from "@/modules/map/MapCard";
import { StyledMapsGrid } from "@/modules/map/styles/StyledMapsGrid";
import { useGetMapsQuery } from "@/api/maps";
import { PageFooter } from "@/layout/page/PageFooter";
import { mapsData } from "@/moc/mapsMoc";
import { useState } from "react";
import { StyledMegaShadow, StyledModalsWrapper } from "@/ui/Modal/styled";
import { MapView } from "@/layout/mapView/MapView";

export default function Maps() {

    const [isMapViewOpen, setIsMapViewOpen] = useState(false)
    const [currentMapViewId, setCurrentMapViewId] = useState('')

    const { data: maps } = useGetMapsQuery({ page: 0, userId: '1', size: 1 })
    console.log(maps)

    const onMapClickHandler = (id: string) => {
        setIsMapViewOpen(true);
        setCurrentMapViewId(id);
    };

    return (
        <Layout>
            <StyledPageWrapper>
                <PageHeader />
                <StyledPageContent>
                    <StyledMapsGrid>
                        { mapsData.map(el => (
                            <MapCard
                                key={ el.id }
                                addedCount={ el.addedCount }
                                commentsCount={ el.commentsCount }
                                label={ el.label }
                                image={ el.image }
                                onClick={() => onMapClickHandler(el.id)}
                            />
                        )) }
                    </StyledMapsGrid>
                </StyledPageContent>
                <PageFooter />
            </StyledPageWrapper>
            {isMapViewOpen && (
                <StyledModalsWrapper>
                    <StyledMegaShadow
                        onClick={() => setIsMapViewOpen(false)}
                    />
                    {/* <Modal type="Authorization" /> */}
                    <MapView />
                </StyledModalsWrapper>
            )}
        </Layout>
    )
}
