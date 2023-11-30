import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Event from "./pages/Event"
import Apply from "./pages/Apply"
import MyNav from "./components/shared/MyNav"
import MyFooter from "./components/shared/MyFooter"
import NotFound from "./pages/NotFound"
import './modified.css'
import Vacancy from "./pages/Vacancy"
import Borders from "./pages/Borders"



const DynamicPage = ()=>{
  return(
    <>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>

        <MyNav />
        <div style={{flex: "1"}}>

          <Outlet />
        </div>
        
        <MyFooter />
      </div>
      
    </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DynamicPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'events',
          element: <Event />
        },
        {
          path: 'apply-for-seat',
          element: <Apply />
        },
        {
          path: "*",
          element: <NotFound />
        },
        {
          path: "vacancy",
          element: <Vacancy />
        },
        {
          path: "borders",
          element: <Borders />
        }
      ]
    }
  ])

  return(
    <>
      
      <RouterProvider router={router} />
     
    </>
  )
  
}

export default App
