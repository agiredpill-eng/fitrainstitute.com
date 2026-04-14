import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ChallengePage from './pages/ChallengePage'
import ContactPage from './pages/ContactPage'
import ForMuslimsPage from './pages/ForMuslimsPage'
import ForScepticsPage from './pages/ForScepticsPage'
import ForVeteransPage from './pages/ForVeteransPage'
import HomePage from './pages/HomePage'
import MethodologyPage from './pages/MethodologyPage'
import PodcastsPage from './pages/PodcastsPage'
import ResearchLibraryPage from './pages/ResearchLibraryPage'
import SourceIndexPage from './pages/SourceIndexPage'
import VideosPage from './pages/VideosPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="research" element={<ResearchLibraryPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="podcasts" element={<PodcastsPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="sources" element={<SourceIndexPage />} />
          <Route path="challenge" element={<ChallengePage />} />
          <Route path="for-muslims" element={<ForMuslimsPage />} />
          <Route path="for-sceptics" element={<ForScepticsPage />} />
          <Route path="for-veterans" element={<ForVeteransPage />} />
          <Route path="methodology" element={<MethodologyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
