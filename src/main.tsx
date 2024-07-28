import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Screens/Home'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Screens/Shared/Components'
import AboutScreen from './Screens/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        {/* <RouterProvider router={router} > */}
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
        <Footer />
        {/* </RouterProvider> */}
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
