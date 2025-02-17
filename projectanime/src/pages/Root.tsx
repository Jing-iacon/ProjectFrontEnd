//ใช้ สำหรับแสดง Header หรือ NavBar ในทุกๆ Page//
import { Outlet } from "react-router-dom" // ในเเต่ละ page จะเลือกแสดงเพจไหน
import Header from "../component/Header"

export default function Root() {
    return (
        <div>
            <Header />
            <Outlet />

        </div>
    )
}