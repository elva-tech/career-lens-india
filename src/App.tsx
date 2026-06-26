import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLoader } from './components/shared/PageLoader'
import { ConsultationProvider } from './context/ConsultationContext'
import { VisitCounterProvider } from './context/VisitCounterContext'
import { ConsultationModal } from './components/layout/ConsultationModal'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { CampusImpactPage } from './pages/CampusImpactPage'
import { CounsellingPage } from './pages/CounsellingPage'
import { ConceptPicker } from './pages/ConceptPicker'
import { ConceptB } from './pages/ConceptB'
import { ConceptC } from './pages/ConceptC'

export default function App() {
  return (
    <BrowserRouter>
      <VisitCounterProvider>
        <ConsultationProvider>
          <PageLoader />
          <ConsultationModal />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/campus-impact" element={<CampusImpactPage />} />
            <Route path="/counselling" element={<CounsellingPage />} />
            <Route path="/concepts" element={<ConceptPicker />} />
            <Route path="/concept-b" element={<ConceptB />} />
            <Route path="/concept-c" element={<ConceptC />} />
          </Routes>
        </ConsultationProvider>
      </VisitCounterProvider>
    </BrowserRouter>
  )
}
