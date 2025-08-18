<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> a194f811d274f088b34f2ab8934c6ef94d0ef019
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Evaluacion from './pages/Evaluacion'
import Resultados from './pages/Resultados'
import Configuracion from './pages/Configuracion'

<<<<<<< HEAD
=======

>>>>>>> a194f811d274f088b34f2ab8934c6ef94d0ef019
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/evaluacion" element={<Evaluacion />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/configuracion" element={<Configuracion />} />
<<<<<<< HEAD
=======

>>>>>>> a194f811d274f088b34f2ab8934c6ef94d0ef019
        </Routes>
      </Layout>
    </Router>
  )
}

<<<<<<< HEAD


export default App
=======
export default App

>>>>>>> a194f811d274f088b34f2ab8934c6ef94d0ef019
