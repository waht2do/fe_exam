import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DefaultLayout from './layouts/Default'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'

const router = createBrowserRouter([
  // pages..
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
