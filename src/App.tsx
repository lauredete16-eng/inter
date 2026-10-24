import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Missions from './pages/Missions'
import Notices from './pages/Notices'
import ProfileDetail from './pages/ProfileDetail'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Contact from './pages/Contact'
import { Legal, Privacy, NotFound } from './pages/Static'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="missions" element={<Missions />} />
          <Route path="notices" element={<Notices />} />
          <Route path="notices/:id" element={<ProfileDetail />} />
          <Route path="actualites" element={<News />} />
          <Route path="actualites/:id" element={<NewsDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentions-legales" element={<Legal />} />
          <Route path="confidentialite" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
