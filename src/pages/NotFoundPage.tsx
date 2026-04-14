import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="border-b border-line bg-white py-24">
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The route you requested is not in the published index. Return to the home page or use the site
          footer for full navigation.
        </p>
        <Link
          className="mt-8 inline-flex text-sm font-medium text-ink underline-offset-4 hover:underline"
          to="/"
        >
          Back to home
        </Link>
      </Container>
    </section>
  )
}
