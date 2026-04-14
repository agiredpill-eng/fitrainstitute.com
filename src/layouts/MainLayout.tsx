import { Outlet } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import ScrollToTop from '../components/layout/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
