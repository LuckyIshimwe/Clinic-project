import React from 'react'
import DashboardMain from './components/pages/dashboard-main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/landing-page/landingPage'

const App = () => {
  return     (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<DashboardMain />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App