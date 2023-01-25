import { Layout } from "@/layout/Layout";
import { PageHeader } from "@/layout/page/PageHeader";
import { PageFooter } from "@/layout/page/styles/StyledPageFooter";
import { StyledPageWrapper } from "@/layout/page/styles/StyledPageWrapper";
import { StyledPageContent } from "@/layout/page/styles/StyledPageContent";

export default function Maps()  {
    return (
        <Layout>
            <StyledPageWrapper>
                <PageHeader />
                <StyledPageContent>

                </StyledPageContent>
                <PageFooter />
            </StyledPageWrapper>
        </Layout>
    )
}
