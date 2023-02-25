import { Layout } from "@/layout/Layout";
import { PageHeader } from "@/layout/page/PageHeader";
import { PageFooter } from "@/layout/page/styles/StyledPageFooter";
import { StyledPageWrapper } from "@/layout/page/styles/StyledPageWrapper";
import { StyledPageContent } from "@/layout/page/styles/StyledPageContent";
import { MapCard } from "@/modules/map/MapCard";
import {StyledMapsGrid} from "@/modules/map/styles/StyledMapsGrid";
import {useGetMapsQuery} from "@/api/maps";

export default function Maps()  {

    const {data: maps} = useGetMapsQuery({page: 0, userId: '1', size: 1})
    console.log(maps)
    return (
        <Layout>
            <StyledPageWrapper>
                <PageHeader />
                <StyledPageContent>
                    <StyledMapsGrid>
                        <MapCard
                            key={ 1 }
                            addedCount={ 5 }
                            commentsCount={ 5 }
                            label="Карта 1"
                            image=""
                        />
                        <MapCard
                            key={ 2 }
                            addedCount={ 5 }
                            commentsCount={ 5 }
                            label="Карта 2"
                            image=""
                        />
                        <MapCard
                            key={ 3 }
                            addedCount={ 5 }
                            commentsCount={ 5 }
                            label="Карта 3"
                            image=""
                        />
                    </StyledMapsGrid>
                </StyledPageContent>
                <PageFooter />
            </StyledPageWrapper>
        </Layout>
    )
}
