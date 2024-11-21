import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Delay from './pages/Delay'
import { requiresAuth } from './loaders/requiresAuth'

// http://localhost:5173/about
// http://localhost:5173/#/about
const router = createBrowserRouter([
  // 라우트 객체(페이지 정보)
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
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: requiresAuth
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/delay',
        element: <Delay />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
// http://localhost:5173/
// http://localhost:5173/about

export default function Router() {
  // Props, Prop, 속성
  return <RouterProvider router={router} />
}
