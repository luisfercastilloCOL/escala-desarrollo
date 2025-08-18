import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Evaluacion from './pages/Evaluacion'
import Resultados from './pages/Resultados'
import Configuracion from './pages/Configuracion'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/evaluacion" element={<Evaluacion />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/configuracion" element={<Configuracion />} />

        </Routes>
      </Layout>
    </Router>
  )
}

export default App

