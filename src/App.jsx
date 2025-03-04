import { useState } from 'react'
import './App.css'
import { NavClientTop } from './components/navClientTop/NavClientTop'
import { Header } from './components/header/Header'
import { ProductosPage } from './pages/productos/ProductosPage'
function App() {

  return (
    <>
    <NavClientTop/>
    <Header/>
    <ProductosPage/>
    </>
  )
}

export default App
