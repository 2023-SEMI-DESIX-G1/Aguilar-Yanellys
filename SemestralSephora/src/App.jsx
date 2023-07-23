import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/shopping-cart",
        element: <Cart />
      }
    ]
  },

])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App