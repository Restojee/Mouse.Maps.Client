import { StyledWelcomeButton } from '@/modules/welcome/styles/StyledWelcomeButton';
import { StyledWelcomePage } from '@/modules/welcome/styles/StyledWelcomePage';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <StyledWelcomePage>
        <StyledWelcomeButton>
          Go!
        </StyledWelcomeButton>
      </StyledWelcomePage>
  )
}
