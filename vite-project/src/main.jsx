import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home, { loader as MovieLoader } from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import MovieDetailPage, { loader as MovieDetailLoader} from './pages/MovieDetailPage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>} errorElement={<Error/>} >
    <Route index element={<Home/>} loader={MovieLoader}/>
    <Route path='moviedetail/:id' element={<MovieDetailPage/>} loader={MovieDetailLoader} />
    {/* <Route path='*' element={<Error/>} />  */}
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
