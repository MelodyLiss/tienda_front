import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ListadosProductosPage } from './pages/productos/ListadosProductosPage'
import { LayoutMain } from './layout/LayoutMain'
import { ProductoIndividualPage } from './pages/productos/productoIndividual'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<ProductoIndividualPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
