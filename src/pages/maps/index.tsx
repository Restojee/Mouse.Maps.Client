import { Layout } from "@/layout/Layout";
import { PageHeader } from "@/layout/page/PageHeader";
import { StyledPageWrapper } from "@/layout/page/styles/StyledPageWrapper";
import { StyledPageContent } from "@/layout/page/styles/StyledPageContent";
import { MapCard } from "@/modules/map/MapCard";
import { StyledMapsGrid } from "@/modules/map/styles/StyledMapsGrid";
import { useGetMapsQuery } from "@/api/maps";
import { PageFooter } from "@/layout/page/PageFooter";
import { mapsData } from "@/moc/mapsMoc";

export default function Maps() {

    const { data: maps } = useGetMapsQuery({ page: 0, userId: '1', size: 1 })
    console.log(maps)

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
                                onClick={() => onClickMap(item.id)}
                            />
                        )) }
                    </StyledMapsGrid>
                </StyledPageContent>
                <PageFooter />
            </StyledPageWrapper>
        </Layout>
    )
}
