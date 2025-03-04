import { useState } from 'react'
import './App.css'
import { NavClientTop } from './components/navClientTop/NavClientTop'
import { Header } from './components/header/Header'
import { ProductosPage } from './pages/productos/ProductosPage'
import { Footer } from './components/footer/Footer'
function App() {

  return (
    <>
    <NavClientTop/>
    <Header/>
    <ProductosPage/>
    <Footer/>
    </>
  )
}

export default App
