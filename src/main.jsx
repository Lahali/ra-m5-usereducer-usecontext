import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Data, Profile } from './pages'
import { paths } from './constants'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: paths.home,
  },
  {
    element: <Data />,
    path: paths.data,
  },
  {
    element: <Profile />,
    path: paths.profile,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
