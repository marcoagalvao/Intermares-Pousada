import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaBase from './pages/PaginaBase'
import Home from './pages/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<PaginaBase />}>
            <Route index element={<Home />}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
