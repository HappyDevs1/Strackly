import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiTrolleyDuotone } from "react-icons/pi";
import { TfiPackage } from "react-icons/tfi";
import { LuHistory } from "react-icons/lu";
import { PiGraphBold } from "react-icons/pi";

function NavBar() {
  return (
    <div>
      <div className="mx-10 flex flex-col justify-between bg-white">
        <div className="flex items-center gap-2 py-8">
        <PiGraphBold className="text-blue-400 text-5xl"/>
          <Link to="/dashboard" className="text-2xl font-bold">Strackly</Link>
        </div>
        <div>
          <ul className="flex flex-col items-start gap-7 text-lg text-gray-600">
            <li className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-200 cursor-pointer">
              <RxDashboard />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-200 cursor-pointer">
              <TfiPackage />
              <Link to="/inventory">Inventory</Link>
            </li>
            <li className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-200 cursor-pointer">
              <PiTrolleyDuotone />
              <Link to="/orders">Orders</Link>
            </li>
            <li className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl hover:text-blue-600 hover:bg-blue-200 cursor-pointer">
              <LuHistory />
              <Link to="/history">History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
