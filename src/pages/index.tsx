import { StyledWelcomeButton } from '@/modules/welcome/styles/StyledWelcomeButton';
import { StyledWelcomePage } from '@/modules/welcome/styles/StyledWelcomePage';
import { Inter } from '@next/font/google';
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const navigate = useRouter()

  return (
      <StyledWelcomePage>
        <StyledWelcomeButton onClick={() => navigate.push('/maps')}>
          Go!
        </StyledWelcomeButton>
      </StyledWelcomePage>
  )
}
