import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import HomePage from "./Home/HomePage"
import DetailsPage from "./Details/DetailsPage"
import MyFavoritePage from "./MyFavoritePage"
import SearchPage from "./Search/SearchPage"
import './index.css'
import { searchLoader } from "./Search/searchLoader"
import { detailsLoader } from "./Details/detailsLoader"
import { homeLoader } from "./Home/homeLoader"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // เมื่อผู้ใช้เข้ามาหน้าแรกของ Web จะแสดง Root layout ออกไป
    children: [ // ให้ Root มีการเลือกใช้ แต่ละ element ด้านล่าง ถ้าม่ตรงกับอันนั้นเลยจะเป็น Default คือ Homepage
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/myfavorite",
        element: <MyFavoritePage />
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: detailsLoader,
      }
    ]
  }
    ])


    // RouterProvider จะเป็นเหมือน Context system คือ มีการเเชร์ทั่วทั้ง App รวมถึง State ต่าง ๆ 
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
