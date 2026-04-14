import AudiencePaths from '../components/home/AudiencePaths'
import ChallengePreview from '../components/home/ChallengePreview'
import FeaturedResearch from '../components/home/FeaturedResearch'
import HomeHero from '../components/home/HomeHero'
import InstitutionalPosition from '../components/home/InstitutionalPosition'
import MethodologyCredibility from '../components/home/MethodologyCredibility'
import SourceTransparency from '../components/home/SourceTransparency'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <InstitutionalPosition />
      <AudiencePaths />
      <FeaturedResearch />
      <SourceTransparency />
      <ChallengePreview />
      <MethodologyCredibility />
    </>
  )
}
