import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './style.css'
import ErrorPage from './error-page.jsx'
import About from './about-page.jsx'

const router = createBrowserRouter([
  {
    path: "/genki-kanji/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/genki-kanji/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
