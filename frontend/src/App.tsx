import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import Home from './pages/Home'
// import EventsPage from './pages/EventsPage'
import ScrollToTop from './components/ScrollToTop'
import { EventsProvider } from './lib/eventsStore'
import NotFoundPage from './pages/NotFoundPage'
import PortalPage from './pages/PortalPage'

function App() {
    useEffect(() => {
        const preventImageDrag = (event: DragEvent) => {
            if (event.target instanceof HTMLImageElement) {
                event.preventDefault()
            }
        }

        document.addEventListener('dragstart', preventImageDrag)
        return () => document.removeEventListener('dragstart', preventImageDrag)
    }, [])

    return (
        <EventsProvider>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutPage />} />
                {/* <Route path="/eventos" element={<EventsPage />} /> */}
                <Route path="/portal" element={<PortalPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </EventsProvider>
    )
}

export default App
