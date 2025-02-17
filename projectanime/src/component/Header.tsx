import { Link } from "react-router-dom"; //link เป็น Component ในการ ์navigate ไปหน้าอื่น ๆ
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm">
        <Link className="text-lg font-bold mx-10" to="/">
          LOGO
        </Link>
      </div>

      <div className="flex flex-row mr-10">
        <div className="flex flex-row  items-center space-x-10 ">
         
            <Link className="text-lg font-bold mx-10" to="/">
              Home
            </Link>
        
            <Link className="text-lg font-bold mx-8 whitespace-nowrap inline-block" to="/">
              My Favorite
            </Link>
          
        </div>

        <div className="w-full max-w-xl ml-4">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
