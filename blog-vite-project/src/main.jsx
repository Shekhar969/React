  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
  import BlogsPosts from './components/blogs.jsx'
  import Blog from './components/blog.jsx'



  const routes = createBrowserRouter([
    {
      path:"/",
      element: <App />
    },
    {
      path:"/blogs",
      element:<BlogsPosts />,
      children: [
        {
          path: "blog/:id",
          element: <Blog />,
        },
      ],
    },
  ])


  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>,
)
