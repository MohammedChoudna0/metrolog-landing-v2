import Hero from '../components/Hero'
import Compliance from '../components/Compliance'
import Steps from '../components/Steps'
import ProblemSolution from '../components/ProblemSolution'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import LeadForm from '../components/LeadForm'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <Compliance />
      <Steps />
      <ProblemSolution />
      <Features />
      <FAQ />
      <LeadForm />
    </>
  )
}
