import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/common/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const ConstructionMetallique = lazy(() => import('@/pages/ConstructionMetallique'))
const GestionFinances = lazy(() => import('@/pages/GestionFinances'))
const Electricite = lazy(() => import('@/pages/Electricite'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/formations/construction-metallique" element={<ConstructionMetallique />} />
          <Route path="/formations/gestion-finances-management" element={<GestionFinances />} />
          <Route path="/formations/electricite" element={<Electricite />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
