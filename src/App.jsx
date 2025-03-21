import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { ProductListPage } from './pages/ProductListPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<ProductListPage />} />    */}
          {/* <Route index element={<ProductDetailPage />} /> */}
          <Route index element={<LoginPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
